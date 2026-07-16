import { CodeBlockGal } from "galliard-ui";
import { DataTable } from "../../components/DataTable";
import type { PropRow } from "../../models/TableModel";
import { propsColumns } from "../../hooks/usePropsTableColumns";
import { DocsPagination } from "../../components/DocsPagination";

export default function ValidateForms() {
  const baseProps: PropRow[] = [
    {
      name: "typeInput",
      type: '"text", "email", "phone", "url", "pass", "num", "bool", "date", "date-time", "time"',
      description:
        "Discriminante que determina que reglas de validació se aplica",
    },
    {
      name: "value",
      type: "depende de typeInput",
      description:
        "Valor a valiudar. Su tipo cambia segun typeInput (string, number, boolean, Date, etc)",
    },
    {
      name: "canBeNull",
      type: "boolean",
      defaultValue: "false",
      description:
        "Si es true, permite que value sea null, undefined o vacío sin generar el error de campo obligatorio",
    },
    {
      name: "nameInput",
      type: "string",
      description:
        'Nombre del campo, usado para armar el mensaje de error (ej. "El correo es obligatorio")',
    },
    {
      name: "setError",
      type: "(error: string) => void",
      description:
        "Callback que recibe el mensaje de error cuando la validación falta. Normlamente conecta con un useState del formulario",
    },
  ];

  const textParams: PropRow[] = [
    {
      name: "minLength",
      type: "number",
      description: "Longitud mínima permitida del texto",
    },
    {
      name: "maxLength",
      type: "number",
      description: "Longitud máxima permitida del texto",
    },
    {
      name: "needBeEqualTo",
      type: "string",
      description:
        "Valor con el que value NO debe coincidir (ver nota de comportamiento abajo)",
    },
    {
      name: "regex",
      type: "RegExp",
      description: "Expresión regular que value debe cumplir",
    },
  ];

  const numParams: PropRow[] = [
    {
      name: "min",
      type: "number",
      description: "Valor mínimo permitido",
    },
    {
      name: "max",
      type: "number",
      description: "Valor máximo permitido",
    },
    {
      name: "isInteger",
      type: "boolean",
      description:
        "Si es true, exige que value sea un numero entero (Sin decimales)",
    },
    {
      name: "needBeEqualTo",
      type: "number",
      description:
        "Valor con el que value NO debe coincidir (ver nota de comportamiento abajo).",
    },
  ];

  const boolParams: PropRow[] = [
    {
      name: "mustBeTrue",
      type: "boolean",
      description:
        "Si es true, exige que value sea estrictamente true (ej. checkbox de términos y condiciones)",
    },
  ];

  const dateParams: PropRow[] = [
    {
      name: "min",
      type: "Date",
      description:
        "Fecha mínima permitida. Es obligatoria: si no se define, la validación lanza un error",
    },
    {
      name: "max",
      type: "Date",
      description:
        "Fecha máxima permitida. Es obligatoria: si no se define, la validación lanza un error",
    },
  ];

  return (
    <div className="container doc-content">
      <h1 className="titlePrimary">useValidateForms</h1>

      <p className="text">
        Hook para validar formularios completos en una sola llamada. Recibe un
        arreglo de reglas (<span className="inline-code">ValidateProps[]</span>
        ), evalúa cada una según su{" "}
        <span className="inline-code">typeInput</span> y dispara el
        <span className="inline-code">setError</span> correspondiente cuando
        alguna falla.
      </p>

      {/* Uso Básico */}
      <h2 className="titleSecundary">Uso básico</h2>
      <p className="text">
        Se define un arreglo de reglas y se ejecuta el hook al momento de enviar
        el formulario. Retorna <span className="inline-code">true</span>
        solo si todas las reglas pasan
      </p>

      <CodeBlockGal
        hideHeaderIfSingleTab
        tabs={[
          {
            label: "TypeScript",
            language: "ts",
            code: `
            const [emailError, setEmailError] = useState<string>();
            
            const [ageError, setAgeError] = useState<string>();

            const handleSubmit = () => {
                const isValid = useValidateForms([
                  {
                    typeInput:"email",
                    value:email,
                    nameInput:"Correo",
                    setError: setEmailError,
                  },
                  {
                    typeInput: "email",
                    value: age,
                    nameInput:"Edad",
                    min: 18,
                    max: 99,
                    isInteger: true,
                    setError: setAgeError,
                  },  
                ]);

                if(!isValid) return,

                // continuar con el envio...
            }
            `,
          },
        ]}
      />

      <br />

      <p className="note">Retorna:</p>
      <p className="text">
        <span className="inline-code">boolean</span> - true si todas las reglas
        del arreglo pasaron, false si al menos una falló
      </p>

      {/* Propiedades base */}
      <h2 className="titleSecuandary">Propiedades comunes</h2>
      <p className="text">
        Todas las variantes de{" "}
        <span className="inline-code">ValidateProps</span>
        comparten estas propiedades sin importar el{" "}
        <span className="inline-code">typeInput</span> elegido
      </p>
      <DataTable
        columns={propsColumns}
        data={baseProps}
        rowKey={(r) => r.name}
      />

      {/* Texto */}
      <h2 className="titleSecundary">typeInput: "text"</h2>
      <p className="text">
        Valida cadenas de texto genéricas: longitud mínimas/máxima, coincidencia
        con un patrón o desigualdad con un valor específico
      </p>
      <h3 className="subtitle">Parametros adicionales</h3>
      <DataTable
        columns={propsColumns}
        data={textParams}
        rowKey={(r) => r.name}
      />
      <CodeBlockGal
        hideHeaderIfSingleTab
        tabs={[
          {
            label: "TypeScript",
            language: "ts",
            code: `
             {
                typeInput:"text",
                value: username,
                nameInput: "Usuario",
                minLegth: 3,
                maxLength: 20,
                setError: setUsernameError,
             }
            `,
          },
        ]}
      />

      {/* Email */}
      <h2 className="titleSecundary">typeInput: "email"</h2>
      <p className="text">
        Valida el formato de un correo electrónico contra la expresión regular
        <span className="inline-code">/^[^\s@]+@[^\s@]+\.[^\s@]+$/</span>. No
        yiene parámetros adicionales mas allá de los comunes.
      </p>
      <CodeBlockGal
        hideHeaderIfSingleTab
        tabs={[
          {
            label: "TypeScript",
            language: "ts",
            code: `
            {
                typeInput: "email",
                value: email,
                nameInput: "Correo",
                setError: setEmailError,    
            }
            `,
          },
        ]}
      />

      {/* Phone */}
      <h2 className="titleSecundary">typeInput: "phone"</h2>
      <p className="text">
        Valida números telefónicos con o sin lada internacional, separadores por
        esopacio, guión o punto. No tiene parámetros adicionales más allá de los
        comunes
      </p>
      <CodeBlockGal
        hideHeaderIfSingleTab
        tabs={[
          {
            label: "TypeScript",
            language: "ts",
            code: `
            {
                typeInput: "phone",
                value: phone,
                nameInput:"Telefono",
                setError: setPhoneError
            }
            `,
          },
        ]}
      />

      {/* URL */}
      <h2 className="titleSecundary">typeInput: "url"</h2>
      <p className="text">
        Valida que el valor tenga forma de URL (con o sin protocolo
        <span className="inline-code">http(s)://</span>). No tiene parametros
        adicionales más allá de los comunes.
      </p>
      <CodeBlockGal
        hideHeaderIfSingleTab
        tabs={[
          {
            label: "TypeScript",
            language: "ts",
            code: `
            {
                typeInput:"url"
                value:website,
                nameInput:"Sitio web",
                setError: setWebsiteError,
            }
            `,
          },
        ]}
      />

      {/* Pass */}
      <h2 className="titleSecundary">typeInput: "pass"</h2>
      <p className="text">
        Valida contraseñas: mínimo 8 caracteres, al menos un número y al menos
        un símbolo (<span className="inline-code">!@#$%^&*</span>). No tiene
        parámetros adicionales más allá de los comunes.
      </p>
      <CodeBlockGal
        hideHeaderIfSingleTab
        tabs={[
          {
            label: "TypeScript",
            language: "ts",
            code: `
              {
                typeInput:"pass",
                value:password,
                nameInput:"Contraseña",
                setError: setPasswordError
              }
            `,
          },
        ]}
      />

      {/* Num */}
      <h2 className="titleSecundary">typeInput: "num"</h2>
      <p className="text">
        Valida valores numéricos: rango mínimo/máximo, si debe ser entero, o
        desigualdad con un valor específico
      </p>
      <h3 className="subtitle">Parámetros adicionales</h3>
      <DataTable
        columns={propsColumns}
        data={numParams}
        rowKey={(r) => r.name}
      />
      <CodeBlockGal
        hideHeaderIfSingleTab
        tabs={[
          {
            label: "TypeScript",
            language: "ts",
            code: `
              {
                typeInput: "num",
                value: age,
                nameInput: "Edad",
                min: 18,
                max: 99,
                isInteger: true,
                setError: setAgeError,
              }
            `,
          },
        ]}
      />

      {/* Bool */}
      <h2 className="titleSecundary">typeInput "bool"</h2>
      <p className="text">
        Valida valores booleanos, típicamnete checkboxes de aceptación
      </p>
      <h3 className="subtitle">Parámetros adicionales</h3>
      <DataTable
        columns={propsColumns}
        data={boolParams}
        rowKey={(r) => r.name}
      />

      <CodeBlockGal
        hideHeaderIfSingleTab
        tabs={[
          {
            label: "TypeScript",
            language: "ts",
            code: `
            {
                typeInput: "bool",
                value:acceptedTerms,
                nameInput:"Términos y condiciones",
                mustBeTrue: true,
                setError: setTermsError,
            }
            `,
          },
        ]}
      />

      {/* Date / Date-time */}
      <h2 className="titleSecundary">typeInput: "date" | "date-time"</h2>
      <p className="text">
        Valida que una fecha esté dentro de un rango. Acepta{" "}
        <span className="inline-code">Date</span>,{" "}
        <span className="inline-code">string</span> o un timestamp Unix en
        segundos (número de 10 dígitos).
      </p>
      <h3 className="subtitle">Parámetros adicionales</h3>
      <DataTable
        columns={propsColumns}
        data={dateParams}
        rowKey={(r) => r.name}
      />
      <p className="note">Importante</p>
      <p className="text">
        A diferencia de las demás variantes, aqui
        <span className="inline-code">max</span> son obligatorios: si no se
        proprcionan (o no son instancias de{" "}
        <span className="inline-code">Date</span>), el hook lanza un{" "}
        <span className="inline-code">Error</span> en lugar de marcar el campo
        como inválido
      </p>
      <CodeBlockGal
        hideHeaderIfSingleTab
        tabs={[
          {
            label: "TypeScript",
            language: "ts",
            code: `
            {
                typeInput:"date",
                value: birthDate,
                nameInput:"Fecha de nacimiento",
                min: new Date("2006-10-04"),
                max:new Date(),
                setError: setBirthDateError
            }
            `,
          },
        ]}
      />

      {/* Time / Data */}
      <h2 className="titleSecundary">typeInput: "time" | "data"</h2>
      <p className="text">
        Estos dos tipos están definidos en el modelo pero actualmente
        <span className="inline-code">useValidateForms</span> no ejecuta
        ningunaregla sobre ellos: el switch los captura y hace{" "}
        <span className="inline-code">return</span>
        de inmediato, saltándose la validación (más allá del check de{" "}
        <span className="inline-code">canBeNull</span> que se aplica antes del
        switch)
      </p>

      <p className="note">Nota:</p>
      <p className="text">
        Si necesitas validar horas o datos genéricos, por ahora solo se aplica
        la regla de obligatoriedad (
        <span className="inline-code">canBeNull</span>). Cualquier otra regla
        (rango, formato, etc) no tiene efecto hasta que se implemente en el hook
      </p>

      <DocsPagination />
    </div>
  );
}
