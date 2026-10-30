import type { ReactNode } from "react";
import Heading from "@theme/Heading";
import { Reveal } from "@site/src/components/Reveal";
import type { FeatureItem } from "./features";
import styles from "./styles.module.css";

/** Stagger between two cards of the row, in milliseconds. */
const STAGGER_MS = 110;

/**
 * One feature card, revealing itself on scroll.
 *
 * @param props.Icon Inline icon component for the card badge.
 * @param props.title Feature name.
 * @param props.description Feature body copy.
 * @param props.index Zero-based position in the grid, used to stagger the
 *   reveal animation.
 */
export default function FeatureCard({
  Icon,
  title,
  description,
  index,
}: FeatureItem & { index: number }): ReactNode {
  return (
    <div className="col col--4">
      <Reveal className={styles.card} delayMs={index * STAGGER_MS}>
        <span className={styles.iconBadge}>
          <Icon className={styles.icon} />
        </span>
        <Heading as="h3" className={styles.cardTitle}>
          {title}
        </Heading>
        <p className={styles.cardBody}>{description}</p>
      </Reveal>
    </div>
  );
}
