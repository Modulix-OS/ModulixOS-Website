import { useEffect, useState } from "react";

/**
 * Checks whether the visitor asked the system to limit motion.
 *
 * @returns `true` when `prefers-reduced-motion: reduce` matches, `false` when
 *   it does not or when no DOM is available.
 */
function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Animates a number from zero up to `target` once `active` becomes true.
 *
 * The animation runs on `requestAnimationFrame` and is skipped entirely when
 * the visitor prefers reduced motion, in which case `target` is returned right
 * away. The initial value is `target` as well, so statically rendered markup
 * already carries the final figure and search engines never see a zero.
 *
 * @param target Final value to reach. Must be finite.
 * @param active Whether the animation may start; typically the visibility flag
 *   returned by {@link useRevealOnScroll}.
 * @param durationMs Animation length in milliseconds. Must be greater than 0.
 * @returns The value to display, rounded to an integer.
 */
export function useCountUp(
  target: number,
  active: boolean,
  durationMs = 1100,
): number {
  const [value, setValue] = useState(target);

  useEffect(() => {
    if (!active) {
      return;
    }
    if (prefersReducedMotion()) {
      setValue(target);
      return;
    }

    let frame = 0;
    const started = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - started) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    setValue(0);
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, durationMs]);

  return value;
}
