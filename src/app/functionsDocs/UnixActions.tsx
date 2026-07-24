import { CodeBlockGal } from "galliard-ui";
import { DataTable } from "../../components/DataTable";
import type { PropRow } from "../../models/TableModel";
import { propsColumns } from "../../hooks/usePropsTableColumns";
import { UnixDateDemo } from "../../components/UnixDateDemo";
import { DocsPagination } from "../../components/DocsPagination";

export default function UnixActions() {
  const timezonesInfo: PropRow[] = [
    {
      name: "TIMEZONES",
      type: "readonly string[]",
      description:
        "Array de zonas horarias soportadas (as const). Se usa para tipar SupportedTimeZone y limitar qué timezones son válidos en las demás funciones.",
    },
  ];

  const convertToUnixParams: PropRow[] = [
    {
      name: "dateString",
      type: "string | Date",
      description: "Fecha a convertir.",
    },
  ];

  const unixToDateParams: PropRow[] = [
    {
      name: "unixTime",
      type: "number | null | undefined",
      description: "Timestamp Unix en segundos.",
    },
    {
      name: "timeZone",
      type: "SupportedTimeZone",
      defaultValue: '"America/Mexico_City"',
      description: "Zona horaria usada para el cálculo.",
    },
  ];

  const unixToDateTimeStringParams: PropRow[] = [
    {
      name: "unixTime",
      type: "number | null | undefined",
      description: "Timestamp Unix en segundos.",
    },
    {
      name: "timeZone",
      type: "SupportedTimeZone",
      defaultValue: '"America/Mexico_City"',
      description: "Zona horaria usada para el cálculo.",
    },
  ];

  const unixToDateTimeParams: PropRow[] = [
    {
      name: "unixTime",
      type: "number | null | undefined",
      description: "Timestamp Unix en segundos.",
    },
    {
      name: "timeZone",
      type: "SupportedTimeZone",
      defaultValue: '"America/Mexico_City"',
      description: "Zona horaria usada para el cálculo.",
    },
  ];

  const unixToStringYMDParams: PropRow[] = [
    {
      name: "unixTimestamp",
      type: "number | null | undefined",
      description: "Timestamp Unix en segundos.",
    },
    {
      name: "timeZone",
      type: "SupportedTimeZone",
      defaultValue: '"America/Mexico_City"',
      description: "Zona horaria usada para el cálculo.",
    },
  ];

  return (
    <div className="container doc-content">
      <h1 className="titlePrimary">Utilidades de Fecha</h1>
      <p className="text">
        Conjunto de funciones para trabajar con timestamps Unix, conversión de
        fechas y manejo de zonas horarias. Internamente utilizan
        <span className="inline-code">Intl.DateTimeFormat</span> para evitar
        errores de formato entre distintos entornos.
      </p>

      {/* DEMO INTERACTIVO */}
      <h2 className="titleSecundary">Playground</h2>
      <p className="text">
        Prueba las funciones de conversión en vivo. Selecciona si partes de una
        fecha o de un timestamp Unix, elige la zona horaria y la función a usar.
      </p>
      <UnixDateDemo />

      {/* TIMEZONES */}
      <h2 className="titleSecundary">TIMEZONES</h2>
      <p className="text">
        Array de zonas horarias soportadas (
        <span className="inline-code">as const</span>). Se usa para tipar{" "}
        <span className="inline-code">SupportedTimeZone</span> y limitar qué
        timezones son válidos en las demás funciones.
      </p>
      <DataTable
        columns={propsColumns}
        data={timezonesInfo}
        rowKey={(r) => r.name}
      />
      <CodeBlockGal
        hideHeaderIfSingleTab
        tabs={[
          {
            label: "TypeScript",
            language: "ts",
            code: `const TIMEZONES = [
    'America/Mexico_City',
    'America/New_York',
    'America/Los_Angeles',
    'America/Bogota',
    'America/Argentina/Buenos_Aires',
    'America/Sao_Paulo',
    'Europe/Madrid',
    'Europe/London',
    'Europe/Paris',
    'Asia/Tokyo',
    'Asia/Shanghai',
    'Australia/Sydney',
    'UTC'
] as const;`,
          },
        ]}
      />

      {/* convertToUnix */}
      <h2 className="titleSecundaryButton">convertToUnix</h2>
      <p className="text">
        Convierte una fecha (<span className="inline-code">string</span> o
        <span className="inline-code">Date</span>) a timestamp Unix en segundos
        (UTC).
      </p>
      <h3 className="subtitle">Parámetros</h3>
      <DataTable
        columns={propsColumns}
        data={convertToUnixParams}
        rowKey={(r) => r.name}
      />
      <p className="note">Retorna:</p>
      <p className="text">
        <span className="inline-code">number</span> — timestamp Unix en
        segundos. Si <span className="inline-code">dateString</span> es falsy,
        retorna <span className="inline-code">0</span>.
      </p>
      <CodeBlockGal
        hideHeaderIfSingleTab
        tabs={[
          {
            label: "TypeScript",
            language: "ts",
            code: `convertToUnix("2026-07-13T10:00:00") // 1783936800
convertToUnix(new Date())`,
          },
        ]}
      />

      {/* unixToDate */}
      <h2 className="titleSecundaryButton">unixToDate</h2>
      <p className="text">
        Convierte un timestamp Unix a un string
        <span className="inline-code">YYYY-MM-DD</span>, compatible con el
        constructor de <span className="inline-code">Date</span>.
      </p>
      <h3 className="subtitle">Parámetros</h3>
      <DataTable
        columns={propsColumns}
        data={unixToDateParams}
        rowKey={(r) => r.name}
      />
      <p className="note">Retorna:</p>
      <p className="text">
        <span className="inline-code">string</span> — formato
        <span className="inline-code">"YYYY-MM-DD"</span>. Si
        <span className="inline-code">unixTime</span> es falsy, retorna
        <span className="inline-code">""</span>.
      </p>
      <CodeBlockGal
        hideHeaderIfSingleTab
        tabs={[
          {
            label: "TypeScript",
            language: "ts",
            code: `unixToDate(1783936800) // "2026-07-13"
unixToDate(1783936800, "Europe/Madrid")`,
          },
        ]}
      />

      {/* unixToDateTimeString */}
      <h2 className="titleSecundaryButton">unixToDateTimeString</h2>
      <p className="text">
        Convierte un timestamp Unix a un string legible en español, con hora en
        formato 12h y AM/PM.
      </p>
      <h3 className="subtitle">Parámetros</h3>
      <DataTable
        columns={propsColumns}
        data={unixToDateTimeStringParams}
        rowKey={(r) => r.name}
      />
      <p className="note">Retorna:</p>
      <p className="text">
        <span className="inline-code">string</span> — formato
        <span className="inline-code">"DD/MES/YYYY - HH:MM AM/PM"</span>. Si
        <span className="inline-code">unixTime</span> es falsy, retorna
        <span className="inline-code">""</span>.
      </p>
      <CodeBlockGal
        hideHeaderIfSingleTab
        tabs={[
          {
            label: "TypeScript",
            language: "ts",
            code: `unixToDateTimeString(1783936800) // "13/JUL/2026 - 10:00 AM"`,
          },
        ]}
      />

      {/* unixToDateTime */}
      <h2 className="titleSecundaryButton">unixToDateTime</h2>
      <p className="text">
        Convierte un timestamp Unix a un string
        <span className="inline-code">YYYY-MM-DD HH:MM</span> en formato 24h,
        compatible con <span className="inline-code">new Date()</span>.
      </p>
      <h3 className="subtitle">Parámetros</h3>
      <DataTable
        columns={propsColumns}
        data={unixToDateTimeParams}
        rowKey={(r) => r.name}
      />
      <p className="note">Retorna:</p>
      <p className="text">
        <span className="inline-code">string</span> — formato
        <span className="inline-code">"YYYY-MM-DD HH:MM"</span>. Si
        <span className="inline-code">unixTime</span> es falsy, retorna
        <span className="inline-code">""</span>.
      </p>
      <CodeBlockGal
        hideHeaderIfSingleTab
        tabs={[
          {
            label: "TypeScript",
            language: "ts",
            code: `unixToDateTime(1783936800) // "2026-07-13 10:00"`,
          },
        ]}
      />

      {/* unixToStringYMD */}
      <h2 className="titleSecundaryButton">unixToStringYMD</h2>
      <p className="text">
        Convierte un timestamp Unix únicamente a la parte de fecha (sin hora),
        usando el mismo formato que
        <span className="inline-code">unixToDateTimeString</span> pero
        recortando la hora.
      </p>
      <h3 className="subtitle">Parámetros</h3>
      <DataTable
        columns={propsColumns}
        data={unixToStringYMDParams}
        rowKey={(r) => r.name}
      />
      <p className="note">Retorna:</p>
      <p className="text">
        <span className="inline-code">string</span> — formato
        <span className="inline-code">"DD/MES/YYYY"</span>.
      </p>
      <CodeBlockGal
        hideHeaderIfSingleTab
        tabs={[
          {
            label: "TypeScript",
            language: "ts",
            code: `unixToStringYMD(1783936800) // "13/JUL/2026"`,
          },
        ]}
      />

      <DocsPagination/>
    </div>
  );
}
