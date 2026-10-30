import { useCallback, useEffect, useState } from "react";
import { defaultSelection, defaultVariants } from "./activities";

/** Time the intro takes to run: staggered cards, then the default ticks. */
const INTRO_MS = 1300;

/**
 * What the picker exposes to its cards.
 *
 * @property selected Ids of the ticked activities.
 * @property variantOf Activity id mapped to the id of its picked edition.
 * @property settled Whether the intro has finished, so clicks no longer go
 *   through the staged delay.
 * @property toggle Ticks an activity on or off.
 * @property pickVariant Picks an edition, ticking its activity on.
 */
type ActivitySelection = {
  selected: ReadonlySet<string>;
  variantOf: Readonly<Record<string, string>>;
  settled: boolean;
  toggle: (id: string) => void;
  pickVariant: (activityId: string, variantId: string) => void;
};

/**
 * Holds what the visitor picked in the installer preview, starting from the
 * selection the real installer opens with.
 *
 * On first scroll into view the default ticks play themselves in; the intro is
 * considered over once {@link INTRO_MS} has passed, or as soon as the visitor
 * interacts, whichever comes first.
 *
 * @param isVisible Whether the card grid has been revealed, which is what
 *   starts the intro.
 * @returns The current selection and the callbacks changing it.
 * @post Nothing is persisted or sent anywhere; the state dies with the page.
 */
export function useActivitySelection(isVisible: boolean): ActivitySelection {
  const [settled, setSettled] = useState(false);
  const [selected, setSelected] =
    useState<ReadonlySet<string>>(defaultSelection);
  const [variantOf, setVariantOf] =
    useState<Readonly<Record<string, string>>>(defaultVariants);

  useEffect(() => {
    if (!isVisible || settled) {
      return;
    }
    const timer = setTimeout(() => setSettled(true), INTRO_MS);
    return () => clearTimeout(timer);
  }, [isVisible, settled]);

  const toggle = useCallback((id: string): void => {
    setSettled(true);
    setSelected((current) => {
      const next = new Set(current);
      if (!next.delete(id)) {
        next.add(id);
      }
      return next;
    });
  }, []);

  const pickVariant = useCallback(
    (activityId: string, variantId: string): void => {
      setSettled(true);
      setVariantOf((current) => ({ ...current, [activityId]: variantId }));
      setSelected((current) =>
        current.has(activityId) ? current : new Set(current).add(activityId),
      );
    },
    [],
  );

  return { selected, variantOf, settled, toggle, pickVariant };
}
