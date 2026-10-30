import type { ReactNode } from "react";
import CountUpValue from "./CountUpValue";
import type { StatItem } from "./stats";
import styles from "./styles.module.css";

/**
 * One cell of the key-figures band: the value above its caption.
 *
 * @param props.countTo Value to count up to, or omitted to show `display`.
 * @param props.display Literal value shown when there is nothing to animate.
 * @param props.suffix Unit appended right after the animated number.
 * @param props.label Caption of the figure.
 * @param props.active Whether the count-up may start; typically the visibility
 *   of the band.
 */
export default function StatCell({
  countTo,
  display,
  suffix,
  label,
  active,
}: StatItem & { active: boolean }): ReactNode {
  return (
    <div className={styles.item}>
      <span className={styles.value}>
        {countTo === undefined ? (
          display
        ) : (
          <CountUpValue value={countTo} suffix={suffix} active={active} />
        )}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
