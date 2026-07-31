import { useMemo, useState } from "react";
import {
  TIMEZONES,
  convertToUnix,
  unixToDateTime,
  unixToDateTimeString,
  unixToStringYMD,
} from "galliard-ui/actions";
import { DropDownGal, InputTextGal, ButtonGal } from "galliard-ui";
import type { OptionsDropModel } from "galliard-ui";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

/* -------------------------------------------------------------------------- */
/*                                    TIPOS                                   */
/* -------------------------------------------------------------------------- */

// Se reconstruye el type localmente porque galliard-ui/actions no exporta
// SupportedTimeZone directamente, solo el array TIMEZONES. Se deriva con
// typeof + indexado numérico (TIMEZONES[number] = unión de todos sus
// valores posibles como tipo).
type SupportedTimeZone = (typeof TIMEZONES)[number];

// Modo activo del playground:
// - "D" (Date a unix): el usuario da una fecha y el resultado que le
//   importa es el unix equivalente.
// - "U" (Unix a date): el usuario da un unix y quiere verlo formateado
//   como fecha, en distintas variantes (YMD, DateTime, DateTime String).
type SourceType = "D" | "U";

// Las 3 funciones de galliard-ui/actions que se usan para formatear un
// unix como fecha. Se muestran sin importar el modo activo (D o U).
type FnName = "unixToStringYMD" | "unixToDateTime" | "unixToDateTimeString";

/* -------------------------------------------------------------------------- */
/*                              CONSTANTES / MAPAS                            */
/* -------------------------------------------------------------------------- */

// Conecta el nombre de cada función (string) con la función real
// importada, para poder invocarla dinámicamente dentro de un .map()
// en vez de escribir un switch/if largo por cada una.
const FN_MAP: Record<
  FnName,
  (unixTime: number | null | undefined, tz: SupportedTimeZone) => string
> = {
  unixToStringYMD,
  unixToDateTime,
  unixToDateTimeString,
};

// Orden fijo en el que se renderizan las 3 funciones dentro del bloque
// de resultado.
const FN_ORDER: FnName[] = [
  "unixToStringYMD",
  "unixToDateTime",
  "unixToDateTimeString",
];

// Etiquetas legibles que se muestran como título de cada bloque de
// resultado (una por función).
const FN_LABELS: Record<FnName, string> = {
  unixToStringYMD: "unixToStringYMD:",
  unixToDateTime: "unixToDateTime:",
  unixToDateTimeString: "unixToDateTimeString:",
};

// Opciones del dropdown de Timezone. DropDownGal no acepta strings
// sueltos, necesita objetos OptionsDropModel { valueOption, text }.
// Como el nombre de la zona horaria ya es legible, se usa el mismo
// string en ambos campos.
const TZ_OPTIONS: OptionsDropModel[] = TIMEZONES.map((tz) => ({
  valueOption: tz,
  text: tz,
}));

/* -------------------------------------------------------------------------- */
/*                                 COMPONENTE                                 */
/* -------------------------------------------------------------------------- */

export function UnixDateDemo() {
  /* -------------------------------- ESTADO -------------------------------- */

  // Modo activo del toggle D/U. Controla qué input se muestra (Fecha o
  // Unix) y qué se calcula/muestra como resultado.
  const [source, setSource] = useState<SourceType>("D");

  // Valor del input de fecha (solo se usa en modo "D").
  // InputTextGal maneja el valor como string plano; se inicializa con
  // la fecha/hora actual en formato compatible con <input type="datetime-local">.
  const [dateInput, setDateInput] = useState(() =>
    new Date().toISOString().slice(0, 16),
  );

  // Valor del input de unix (solo se usa en modo "U").
  // También es un string; se parsea a number más abajo al calcular
  // unixValue. Se inicializa con el unix actual, en segundos.
  const [unixInput, setUnixInput] = useState(() =>
    String(Math.floor(Date.now() / 1000)),
  );

  // Estado del dropdown de Timezone. DropDownGal trabaja con el objeto
  // OptionsDropModel completo (valueOption + text), no con el string de
  // la zona horaria sola.
  const [tzOption, setTzOption] = useState<OptionsDropModel | null>(
    TZ_OPTIONS.find((o) => o.valueOption === "America/Mexico_City") ?? null,
  );

  // Controla si el resultado ya fue calculado y se muestra en pantalla.
  // Los datos NO se calculan/muestran al instante mientras el usuario
  // escribe: solo aparecen tras dar clic en el botón "Ver resultado".
  // Se resetea a false cada vez que cambia cualquier input relevante
  // (fecha, unix, timezone o el modo D/U), para evitar mostrar un
  // resultado desactualizado respecto a lo que hay en los campos.
  const [revealed, setRevealed] = useState(false);

  /* ----------------------------- DERIVADOS -------------------------------- */

  // Extrae el valor "plano" (string) de la timezone seleccionada, con
  // un fallback por si tzOption llegara a ser null (por ejemplo antes
  // del primer render o si el usuario limpia la selección).
  const timeZone = (tzOption?.valueOption ??
    "America/Mexico_City") as SupportedTimeZone;

  // Valida el formato del unix ingresado en modo "U": debe tener entre
  // 10 dígitos (timestamp en segundos, el formato real y actual) y 13
  // dígitos (timestamp en milisegundos). En modo "D" no aplica, siempre
  // se considera válido porque el unix se calcula, no se escribe.
  const isValidUnixInput = source === "U" ? /^\d{10}$/.test(unixInput) : true;

  // unixValue es el dato base del que parte todo el resultado, sin
  // importar el modo activo:
  // - Modo "D": se calcula con convertToUnix a partir de la fecha
  //   ingresada por el usuario.
  // - Modo "U": se toma directo del input numérico (ya es un unix).
  // useMemo evita recalcular esto en cada render si nada relevante
  // cambió (solo se recalcula si cambian source, dateInput o unixInput).
  const unixValue = useMemo(() => {
    if (source === "D") {
      return dateInput ? convertToUnix(dateInput) : 0;
    }
    const parsed = Number(unixInput);
    return Number.isFinite(parsed) ? parsed : 0;
  }, [source, dateInput, unixInput]);

  // Resultado de las 3 funciones de formateo, aplicadas sobre unixValue
  // en UTC y en la timezone seleccionada. Se calcula sin importar el modo
  // activo (D o U), ya que ambos parten de un unixValue válido.
  // El memo devuelve un arreglo vacío mientras el usuario no dé clic en
  // "Ver resultado".
  const results = useMemo(() => {
    if (!revealed) return [];
    return FN_ORDER.map((fn) => ({
      fn,
      utc: FN_MAP[fn](unixValue, "UTC"),
      tz: FN_MAP[fn](unixValue, timeZone),
    }));
  }, [revealed, unixValue, timeZone]);

  // Indica si el botón "Ver resultado" puede mostrarse dado el estado
  // actual de los inputs. En modo "D" siempre es true (la fecha siempre
  // produce un unix válido). En modo "U" depende de que el unix
  // ingresado tenga un formato válido (10 a 13 dígitos).
  const canReveal = source === "D" ? true : isValidUnixInput;

  /* ------------------------------- HANDLERS -------------------------------- */
  // Todos los handlers de cambio de input resetean "revealed" a false,
  // de modo que si el usuario edita algo después de ver un resultado,
  // ese resultado se oculta hasta que vuelva a dar clic en el botón.
  // Esto evita mostrar un resultado que ya no corresponde a los valores
  // actuales de los campos.

  const handleSourceChange = (next: SourceType) => {
    setSource(next);
    setRevealed(false);
  };

  const handleDateChange = (val: string) => {
    setDateInput(val);
    setRevealed(false);
  };

  const handleUnixChange = (val: string) => {
    setUnixInput(val);
    setRevealed(false);
  };

  const handleTzChange = (val: OptionsDropModel | null) => {
    setTzOption(val);
    setRevealed(false);
  };

  const theme = useSelector((state: RootState) => state.theme);
  const isDark = theme === "dark";

  /* -------------------------------- RENDER --------------------------------- */

  return (
    <div className="unixDateDemo">
      {/* ---------------------------------------------------------------- */}
      {/* Toggle D/U                                                       */}
      {/* ---------------------------------------------------------------- */}
      {/* Switch tipo "pastilla" con un label a cada lado. El label del
          modo activo se muestra subrayado/en negrita, el otro atenuado.
          Tanto los labels como el switch mismo son clicables, para dar
          más área de interacción. role="switch" + aria-checked para
          accesibilidad, ya que es un control binario real (no un botón
          de acción). */}
      <div className="unixDateDemo__toggle">
        <span
          className={`unixDateDemo__toggleLabel ${
            source === "D" ? "unixDateDemo__toggleLabel--active" : ""
          }`}
          onClick={() => handleSourceChange("D")}
        >
          Date a unix
        </span>

        <button
          type="button"
          role="switch"
          aria-checked={source === "U"}
          className="unixDateDemo__switch"
          onClick={() => handleSourceChange(source === "D" ? "U" : "D")}
        >
          <span className="unixDateDemo__switchThumb" />
        </button>

        <span
          className={`unixDateDemo__toggleLabel ${
            source === "U" ? "unixDateDemo__toggleLabel--active" : ""
          }`}
          onClick={() => handleSourceChange("U")}
        >
          Unix a date
        </span>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Fila: input dinámico (Fecha o Unix) + Timezone                   */}
      {/* ---------------------------------------------------------------- */}
      {/* El input que se muestra depende del modo activo. Solo uno de
          los dos (dateInput/unixInput) está montado a la vez, pero
          ambos estados se conservan aunque no estén visibles, así que
          si el usuario cambia de modo y regresa, no pierde lo que
          había escrito. El dropdown de Timezone siempre está visible,
          porque aplica sin importar el modo. */}
      <div className="unixDateDemo__row">
        {source === "D" ? (
          <InputTextGal
            label="Fecha"
            typeInput="datetime-local"
            value={dateInput}
            setValue={handleDateChange}
            border={false}
            fontLabel="OpenSansBold"
            bgColor={isDark ? "#121212" : undefined}
            textColor={isDark ? "#ffffff" : undefined}
            iconColorL={isDark ? "#ffffff" : undefined}
          />
        ) : (
          <InputTextGal
            label="Unix"
            typeInput="number"
            value={unixInput}
            setValue={handleUnixChange}
            border={false}
            bgColor={isDark ? "#121212" : undefined}
            textColor={isDark ? "#ffffff" : undefined}
            iconColorL={isDark ? "#ffffff" : undefined}
          />
        )}

        <DropDownGal
          label="Timezone"
          value={tzOption}
          setValue={handleTzChange}
          options={TZ_OPTIONS}
          border={false}
          fontLabel="OpenSansBold"
          bgColor={isDark ? "#121212" : undefined}
          labelColor={isDark ? "#ffffff" : undefined}
          textColor={isDark ? "#ffffff" : undefined}
          iconsColor={isDark ? "#ffffff" : undefined}
          customInputClass={isDark ? "dropdownInputDark" : undefined}
          customOptionClass={isDark ? "dropdownOptionDark" : undefined}
        />

        {/* ---------------------------------------------------------------- */}
        {/* Botón "Ver resultado"                                            */}
        {/* ---------------------------------------------------------------- */}
        {/* Dispara el cálculo/despliegue del resultado. No se muestra si:
          - El resultado ya está visible (revealed === true), o
          - El unix ingresado en modo "U" no tiene un formato válido
            (canReveal === false), para evitar que el usuario intente
            ver un resultado con datos incompletos o mal formados. */}
        {!revealed && canReveal && (
          <ButtonGal
            label="Ver resultado"
            action={() => setRevealed(true)}
            styleType="ThemeBlue"
            borderedStyle={false}
            seeIcon={false}
            customClassButton="buttonResult"
          />
        )}
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Resultado: unix crudo + las 3 funciones de formateo               */}
      {/* ---------------------------------------------------------------- */}
      {/* Se muestra sin importar el modo activo (D o U), una vez que el
          usuario dio clic en "Ver resultado". Siempre se ve el unix crudo
          arriba, y debajo las 3 variantes formateadas (YMD, DateTime,
          DateTime String) tanto en UTC como en la timezone seleccionada. */}
      {revealed && (
        <div className="unixDateDemo__result">
          {source === "D" && (
            <p className="unixDateDemo__unixValue">
              <span className="unixDateDemo__outputLabel">Unix:</span>{" "}
              {unixValue}
            </p>
          )}

          <div className="unixDateDemo__output">
            {results.map(({ fn, utc, tz }) => (
              <div key={fn} className="unixDateDemo__outputGroup">
                <p className="unixDateDemo__outputFnName">
                  <code className="inline-code">{FN_LABELS[fn]}</code>
                </p>
                <p>
                  <span className="unixDateDemo__outputLabel">UTC:</span>{" "}
                  {utc || "—"}
                </p>
                <p>
                  <span className="unixDateDemo__outputLabel">{timeZone}:</span>{" "}
                  {tz || "—"}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
