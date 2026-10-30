import type { KeyboardEvent, ReactNode } from "react";
import clsx from "clsx";
import type { Variant } from "./activities";
import styles from "./styles.module.css";

/**
 * Edition radios of one activity, following the ARIA radiogroup pattern: a
 * single stop in the tab order, arrow keys moving between editions.
 *
 * @param props.variants Editions to offer. Must not be empty.
 * @param props.pickedId Id of the currently selected edition.
 * @param props.shown Whether the intro has revealed the card; until then no
 *   radio is drawn as picked, matching how the tick boxes behave.
 * @param props.labelledBy Id of the element naming the group.
 * @param props.onPick Called with the id of the edition to select.
 */
export default function VariantGroup({
  variants,
  pickedId,
  shown,
  labelledBy,
  onPick,
}: {
  variants: readonly Variant[];
  pickedId: string | undefined;
  shown: boolean;
  labelledBy: string;
  onPick: (variantId: string) => void;
}): ReactNode {
  /**
   * Moves the selection by `step` positions, wrapping around, and follows it
   * with the focus as the pattern requires.
   *
   * @param event Key event to consume when it maps to a move.
   * @param step Offset to apply to the current index.
   */
  function move(event: KeyboardEvent<HTMLDivElement>, step: number): void {
    const from = variants.findIndex((variant) => variant.id === pickedId);
    const target =
      (Math.max(from, 0) + step + variants.length) % variants.length;
    const next = variants.at(target);
    if (!next) {
      return;
    }
    event.preventDefault();
    onPick(next.id);
    const radios =
      event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="radio"]');
    radios.item(target)?.focus();
  }

  return (
    <div
      role="radiogroup"
      aria-labelledby={labelledBy}
      className={styles.variants}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
          move(event, 1);
        } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
          move(event, -1);
        }
      }}
    >
      {variants.map((variant) => {
        const isCurrent = variant.id === pickedId;
        return (
          <button
            key={variant.id}
            type="button"
            role="radio"
            aria-checked={isCurrent && shown}
            tabIndex={isCurrent ? 0 : -1}
            onClick={() => onPick(variant.id)}
            className={styles.variant}
          >
            <span
              className={clsx(
                styles.radio,
                isCurrent && shown && styles.radioOn,
              )}
              aria-hidden="true"
            />
            {variant.label}
          </button>
        );
      })}
    </div>
  );
}
