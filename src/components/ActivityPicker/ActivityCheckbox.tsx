import type { ReactNode } from "react";
import clsx from "clsx";
import { CheckIcon } from "@site/src/components/Icons";
import styles from "./styles.module.css";

/**
 * Tick box pinned to the top-right corner of a card, drawn as checked only
 * when the card is part of the selection.
 *
 * Purely decorative: the `checkbox` role and its state live on the button
 * wrapping the whole card, so screen readers announce one control, not two.
 *
 * @param props.isChecked Whether the activity is selected.
 */
export default function ActivityCheckbox({
  isChecked,
}: {
  isChecked: boolean;
}): ReactNode {
  return (
    <span
      className={clsx(styles.checkbox, isChecked && styles.checkboxOn)}
      aria-hidden="true"
    >
      {isChecked ? <CheckIcon className={styles.checkMark} /> : null}
    </span>
  );
}
