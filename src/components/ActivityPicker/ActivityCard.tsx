import type { ReactNode } from "react";
import clsx from "clsx";
import { RevealItem } from "@site/src/components/Reveal";
import type { Activity } from "./activities";
import { PHONE_ACTIVITY_IDS } from "./activities";
import ActivityCheckbox from "./ActivityCheckbox";
import ActivityIcons from "./ActivityIcons";
import VariantGroup from "./VariantGroup";
import styles from "./styles.module.css";

/** Stagger between two cards as the grid rises in, in milliseconds. */
const STAGGER_MS = 60;

/**
 * One activity card: the tick target covering the whole card, and the edition
 * radios beside it when the activity offers some.
 *
 * @param props.activity Activity to render.
 * @param props.index Zero-based position in the grid, used to stagger the
 *   reveal animation.
 * @param props.isVisible Whether the grid has been revealed. Until then the
 *   card is drawn unticked, so the default selection can play itself in.
 * @param props.isSelected Whether the activity is part of the selection.
 * @param props.pickedVariantId Id of the picked edition, if any.
 * @param props.titleId Id to set on the title, which names the edition group.
 * @param props.onToggle Called when the card is clicked.
 * @param props.onPickVariant Called with the id of the edition to select.
 */
export default function ActivityCard({
  activity,
  index,
  isVisible,
  isSelected,
  pickedVariantId,
  titleId,
  onToggle,
  onPickVariant,
}: {
  activity: Activity;
  index: number;
  isVisible: boolean;
  isSelected: boolean;
  pickedVariantId: string | undefined;
  titleId: string;
  onToggle: () => void;
  onPickVariant: (variantId: string) => void;
}): ReactNode {
  const isChecked = isSelected && isVisible;

  return (
    <RevealItem
      isVisible={isVisible}
      delayMs={index * STAGGER_MS}
      className={clsx(
        styles.card,
        isChecked && styles.cardSelected,
        !PHONE_ACTIVITY_IDS.has(activity.id) && styles.hiddenOnPhone,
      )}
    >
      <button
        type="button"
        role="checkbox"
        aria-checked={isChecked}
        onClick={onToggle}
        className={styles.cardMain}
      >
        <ActivityCheckbox isChecked={isChecked} />

        <ActivityIcons icons={activity.icons} />

        <span id={titleId} className={styles.cardTitle}>
          {activity.title}
        </span>
        <span className={styles.cardDescription}>{activity.description}</span>
        {activity.detail ? (
          <span className={styles.cardDetail}>{activity.detail}</span>
        ) : null}
      </button>

      {activity.variants ? (
        <VariantGroup
          variants={activity.variants}
          pickedId={pickedVariantId}
          shown={isVisible}
          labelledBy={titleId}
          onPick={onPickVariant}
        />
      ) : null}
    </RevealItem>
  );
}
