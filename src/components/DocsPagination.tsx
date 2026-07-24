import styles from "../styles/components/DocsPagination.module.scss";
import { docsNavOrder, type DocsNavItem } from "../models/docsNavOrder";

interface DocsPaginationProps {
  currentHref?: string; // opcional: si no lo pasas, se detecta con la ruta actual
}

export function DocsPagination({ currentHref }: DocsPaginationProps) {
  const href = currentHref ?? window.location.pathname;

  const index = docsNavOrder.findIndex(
    (item: DocsNavItem) => item.href === href,
  );
  const prev: DocsNavItem | undefined =
    index > 0 ? docsNavOrder[index - 1] : undefined;
  const next: DocsNavItem | undefined =
    index !== -1 && index < docsNavOrder.length - 1
      ? docsNavOrder[index + 1]
      : undefined;

  return (
    <div className={styles.pagination}>
      {prev ? (
        <a href={prev.href} className={styles.paginationCard}>
          <span className={styles.paginationLabel}>← Anterior</span>
          <span className={styles.paginationTitle}>{prev.label}</span>
        </a>
      ) : (
        <div />
      )}

      {next ? (
        <a
          href={next.href}
          className={`${styles.paginationCard} ${styles["paginationCard--next"]}`}
        >
          <span className={styles.paginationLabel}>Siguiente →</span>
          <span className={styles.paginationTitle}>{next.label}</span>
        </a>
      ) : (
        <div />
      )}
    </div>
  );
}
