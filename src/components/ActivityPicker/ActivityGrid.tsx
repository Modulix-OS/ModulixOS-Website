import type { ReactNode } from "react";
import clsx from "clsx";
import ActivityCard from "./ActivityCard";
import { ACTIVITIES } from "./activities";
import { useActivitySelection } from "./useActivitySelection";
import styles from "./styles.module.css";

/**
 * Card grid of the picker, owning what the visitor picked.
 *
 * Every card stages itself off the same visibility flag, so the default
 * selection of the installer ticks itself in once the grid is on screen.
 *
 * @param props.headingId Id of the section title, which names the group and
 *   prefixes the per-card title ids.
 * @param props.isVisible Whether the grid has been revealed.
 */
export default function ActivityGrid({
  headingId,
  isVisible,
}: {
  headingId: string;
  isVisible: boolean;
}): ReactNode {
  const { selected, variantOf, settled, toggle, pickVariant } =
    useActivitySelection(isVisible);

  return (
    <div
      role="group"
      aria-labelledby={headingId}
      className={clsx(styles.grid, settled && styles.gridSettled)}
    >
      {ACTIVITIES.map((activity, idx) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          index={idx}
          isVisible={isVisible}
          isSelected={selected.has(activity.id)}
          pickedVariantId={variantOf[activity.id]}
          titleId={`${headingId}-${activity.id}`}
          onToggle={() => toggle(activity.id)}
          onPickVariant={(variantId) => pickVariant(activity.id, variantId)}
        />
      ))}
    </div>
  );
}
