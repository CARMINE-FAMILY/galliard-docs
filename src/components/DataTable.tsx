import styles from "../styles/components/dataTable.module.scss";
import type { DataTableProps } from "../models/TableModel";

export function DataTable<T>({
  columns,
  data,
  striped = true,
  bordered = false,
  compact = false,
  rowKey,
  emptyMessage = "Sin datos para mostrar",
  customClassTable,
}: DataTableProps<T>) {
  return (
    <div className={styles.tableWrapper}>
      <table
        className={`
                    ${styles.table}
                    ${striped ? styles.striped : ""}
                    ${bordered ? styles.bordered : ""}
                    ${compact ? styles.compact : ""}
                    ${customClassTable ?? ""}
                `}
      >
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                style={{ width: col.width, textAlign: col.align ?? "left" }}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className={styles.emptyCell}>
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={rowKey(row, rowIndex)}>
                {columns.map((col) => (
                  <td
                    key={String(col.key)}
                    style={{ textAlign: col.align ?? "left" }}
                  >
                    {col.render
                      ? col.render(row)
                      : String(row[col.key as keyof T] ?? "")}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}