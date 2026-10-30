import type { ReactNode } from "react";
import styles from "./styles.module.css";

/**
 * Centred heading block opening a homepage section: an optional pill badge, the
 * title and an optional lead line.
 *
 * @param props.eyebrow Short badge shown above the title. Omit for none.
 * @param props.title Title of the section.
 * @param props.titleId Id set on the title, so a group below can name itself
 *   after it through `aria-labelledby`. Omit when nothing refers to it.
 * @param props.subtitle Lead line under the title. Omit for none.
 */
export default function SectionIntro({
  eyebrow,
  title,
  titleId,
  subtitle,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  titleId?: string;
  subtitle?: ReactNode;
}): ReactNode {
  return (
    <div className={styles.intro}>
      {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
      <h2 id={titleId} className={styles.title}>
        {title}
      </h2>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
    </div>
  );
}
