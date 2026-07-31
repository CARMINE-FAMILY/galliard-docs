import { Icon } from "@iconify/react";
import styles from "../../styles/components/table/classBadge.module.scss";
import type { ClassBadgeType } from "../../models/TableModel";

const badgeIcon: Record<ClassBadgeType, string | null> = {
    Component: null,
    Part: "tabler:puzzle",
    Modifier: "tabler:wand",
};

export function ClassBadge({ type }: { type: ClassBadgeType }) {
    const icon = badgeIcon[type];

    return (
        <span className={`${styles.badge} ${styles[type.toLowerCase()]}`}>
            {icon && <Icon icon={icon} className={styles.badgeIcon} />}
            {type}
        </span>
    );
}