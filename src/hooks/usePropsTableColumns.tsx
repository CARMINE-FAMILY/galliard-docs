import type { TableColumn, PropRow } from "../models/TableModel";

export const propsColumns: TableColumn<PropRow>[] = [
  {
    key: "name",
    header: "Propiedad",
    width: "16%",
    render: (row) => <code>{row.name}</code>,
  },
  {
    key: "type",
    header: "Tipo",
    width: "26%",
    render: (row) => (row.typePlain ? row.type : <code>{row.type}</code>),
  },
  {
    key: "default",
    header: "Valor por defecto",
    width: "20%",
    render: (row) =>
      !row.defaultValue || row.defaultValue === "—" ? (
        "—"
      ) : row.defaultPlain ? (
        row.defaultValue
      ) : (
        <code>{row.defaultValue}</code>
      ),
  },
  {
    key: "description",
    header: "Descripción",
    render: (row) => row.description,
  },
];
