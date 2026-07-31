import type { TableColumn, ClassNameRow } from "../models/TableModel";
import { ClassBadge } from "../components/table/ClassBadge";

export function useClassNameColumns(): TableColumn<ClassNameRow>[] {
  return [
    {
      key: "className",
      header: "Class name",
      width: "30%",
      render: (row) => <code>{row.className}</code>,
    },
    {
      key: "badge",
      header: "Type",
      width: "20%",
      render: (row) => <ClassBadge type={row.badge} />,
    },
    {
      key: "description",
      header: "",
    },
  ];
}
