import { useMemo, useState } from "react";
import {
  TIMEZONES,
  convertToUnix,
  unixToDate,
  unixToDateTime,
  unixToDateTimeString,
  unixToStringYMD,
} from "galliard-ui/actions";
import { DropDownGal, InputTextGal, ButtonGal } from "galliard-ui";
import type { OptionsDropModel } from "galliard-ui";

// Se reconstruye el type localmente porque galliard-ui/actions no exporta
// SupportedTimeZone directamente, solo el array TIMEZONES. Se deriva con
// typeof + indexado numérico, igual que en el archivo original.
type SupportedTimeZone = (typeof TIMEZONES)[number];

// D = el usuario da una fecha y quiere ver el unix + el texto formateado
// U = el usuario da un unix directo y quiere ver el texto formateado
type SourceType = "D" | "U";

// Las 4 funciones de UnixActions que devuelven texto (todas menos
// convertToUnix, que va aparte porque su dirección es inversa: fecha -> unix)
type FnName =
  | "unixToDate"
  | "unixToStringYMD"
  | "unixToDateTime"
  | "unixToDateTimeString";

// Mapa que conecta el nombre de función (string, usado en el dropdown)
// con la función real importada. Permite llamar la función correcta
// dinámicamente con FN_MAP[fnName](...) en vez de un switch/if largo.
const FN_MAP: Record<
  FnName,
  (unixTime: number | null | undefined, tz: SupportedTimeZone) => string
> = {
  unixToDate,
  unixToStringYMD,
  unixToDateTime,
  unixToDateTimeString,
};

// Opciones del dropdown de Tz. DropDownGal no acepta strings sueltos,
// necesita objetos OptionsDropModel { valueOption, text }. Como el nombre
// de la zona horaria ya es legible, se usa el mismo string en ambos campos.
const TZ_OPTIONS: OptionsDropModel[] = TIMEZONES.map((tz) => ({
  valueOption: tz,
  text: tz,
}));

// Opciones del dropdown de Nf, mismo patrón que TZ_OPTIONS pero con los
// nombres de las 4 funciones disponibles.
const FN_OPTIONS: OptionsDropModel[] = (
  [
    "unixToDate",
    "unixToStringYMD",
    "unixToDateTime",
    "unixToDateTimeString",
  ] as FnName[]
).map((fn) => ({
  valueOption: fn,
  text: fn,
}));

export function UnixDateDemo() {
  // Modo activo del toggle D/U. Controla qué input se muestra y de dónde
  // sale el valor unix base (unixValue, más abajo).
  const [source, setSource] = useState<SourceType>("D");

  // Valor del input de fecha (solo visible/usado en modo D).
  // InputTextGal maneja el valor como string plano.
  const [dateInput, setDateInput] = useState(() =>
    new Date().toISOString().slice(0, 16),
  );

  // Valor del input de unix (solo visible/usado en modo U).
  // También string; se parsea a number más abajo al calcular unixValue.
  const [unixInput, setUnixInput] = useState(() =>
    String(Math.floor(Date.now() / 1000)),
  );

  // Estado del dropdown Tz. DropDownGal trabaja con el objeto
  // OptionsDropModel completo, no con el string de la zona horaria sola.
  const [tzOption, setTzOption] = useState<OptionsDropModel | null>(
    TZ_OPTIONS.find((o) => o.valueOption === "America/Mexico_City") ?? null,
  );

  // Estado del dropdown Nf, mismo patrón que tzOption.
  const [fnOption, setFnOption] = useState<OptionsDropModel | null>(
    FN_OPTIONS.find((o) => o.valueOption === "unixToDateTimeString") ?? null,
  );

  // Se extrae el valor "plano" (string) de cada opción seleccionada, con un
  // fallback por si tzOption/fnOption llegaran a ser null (ej. antes del
  // primer render o si el usuario limpia la selección).
  const timeZone = (tzOption?.valueOption ??
    "America/Mexico_City") as SupportedTimeZone;
  const fnName = (fnOption?.valueOption ?? "unixToDateTimeString") as FnName;

  // unixValue es el dato base del que parte todo lo demás, sin importar
  // el modo activo:
  // - Modo D: se calcula con convertToUnix a partir de la fecha ingresada
  // - Modo U: se toma directo del input numérico (ya es unix)
  // useMemo evita recalcular esto en cada render si nada relevante cambió.
  const unixValue = useMemo(() => {
    if (source === "D") {
      return dateInput ? convertToUnix(dateInput) : 0;
    }
    const parsed = Number(unixInput);
    return Number.isFinite(parsed) ? parsed : 0;
  }, [source, dateInput, unixInput]);

  // Función de formateo seleccionada actualmente en el dropdown Nf
  const selectedFn = FN_MAP[fnName];

  // Se aplica la función elegida dos veces sobre el mismo unixValue:
  // una fijando "UTC" y otra con la zona horaria elegida en Tz.
  // Esto pasa siempre, en ambos modos (D o U), para mostrar el uso
  // real de las funciones del módulo sin importar el origen del dato.
  const utcResult = selectedFn(unixValue, "UTC");
  const tzResult = selectedFn(unixValue, timeZone);

  return (
    <div className="unixDateDemo">
      {/* Toggle D/U: cada botón cambia el modo activo. El botón del modo
          actual se pinta con ThemeBlue (activo), el otro con ThemeGray
          (apagado), simulando el efecto de "pintado/oscuro" del boceto */}
      <div className="unixDateDemo__toggle">
        <ButtonGal
          label="D"
          action={() => setSource("D")}
          styleType={source === "D" ? "ThemeBlue" : "ThemeGray"}
          borderedStyle={false}
          seeIcon={false}
        />
        <ButtonGal
          label="U"
          action={() => setSource("U")}
          styleType={source === "U" ? "ThemeBlue" : "ThemeGray"}
          borderedStyle={false}
          seeIcon={false}
        />
      </div>

      {/* Input dinámico: cambia de tipo y de estado según el modo activo.
          Solo uno de los dos está montado a la vez, pero ambos estados
          (dateInput/unixInput) se conservan aunque no estén visibles */}
      {source === "D" ? (
        <InputTextGal
          label="Fecha"
          typeInput="datetime-local"
          value={dateInput}
          setValue={setDateInput}
          border={false}
        />
      ) : (
        <InputTextGal
          label="Unix"
          typeInput="number"
          value={unixInput}
          setValue={setUnixInput}
          border={false}
        />
      )}

      {/* Dropdown de zona horaria: siempre visible, en ambos modos,
          porque siempre se usa para calcular tzResult */}
      <DropDownGal
        label="Tz"
        value={tzOption}
        setValue={setTzOption}
        options={TZ_OPTIONS}
        border={false}
      />

      {/* Dropdown de función de formateo: siempre visible, decide cuál
          de las 4 funciones de UnixActions se aplica sobre unixValue */}
      <DropDownGal
        label="Nf"
        value={fnOption}
        setValue={setFnOption}
        options={FN_OPTIONS}
        border={false}
      />

      {/* Solo en modo D: muestra el unix crudo que resultó de convertToUnix,
          como paso intermedio antes de aplicarle la función de formateo */}
      {source === "D" && (
        <p className="unixDateDemo__unixValue">
          <span className="unixDateDemo__outputLabel">Unix:</span> {unixValue}
        </p>
      )}

      {/* Resultado final: siempre dos filas, con el texto que devuelve
          la función Nf elegida, una en UTC y otra en la Tz seleccionada */}
      <div className="unixDateDemo__output">
        <p>
          <span className="unixDateDemo__outputLabel">UTC:</span>{" "}
          {utcResult || "—"}
        </p>
        <p>
          <span className="unixDateDemo__outputLabel">{timeZone}:</span>{" "}
          {tzResult || "—"}
        </p>
      </div>
    </div>
  );
}
