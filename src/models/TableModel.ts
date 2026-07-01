import type { ReactNode } from "react";

export interface TableColumn<T> {
  key: keyof T | string;
  header: string;
  width?: string;
  align?: "left" | "center" | "right";
  render?: (row: T) => ReactNode;
}

export interface DataTableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  striped?: boolean;
  bordered?: boolean;
  compact?: boolean;
  rowKey: (row: T, index: number) => string | number;
  emptyMessage?: string;
  customClassTable?: string;

  variant?: "default" | "docs";
}

export interface PropRow {
  name: string;
  type: string;
  typePlain?: boolean;
  defaultValue?: string;
  defaultPlain?: boolean;
  description: ReactNode;
}

export type ClassBadgeType = "Component" | "Part" | "Modifier";

export interface ClassNameRow {
    className: string;
    badge: ClassBadgeType;
    description: string;
}