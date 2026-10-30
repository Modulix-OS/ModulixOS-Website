import { useEffect, useRef, useState } from "react";

/**
 * Observes an element and reports when it first enters the viewport, so a
 * section can animate itself in exactly once.
 *
 * Safe for static rendering: the observer is only created inside an effect, so
 * nothing touches `window` during server-side generation. When
 * `IntersectionObserver` is unavailable the element is revealed immediately.
 *
 * @param rootMargin Margin applied to the viewport before intersection is
 *   computed, in CSS units. A negative bottom value delays the reveal until the
 *   element is comfortably inside the screen.
 * @param threshold Fraction of the element that must be visible to trigger the
 *   reveal, between 0 and 1.
 * @returns A tuple of the ref to attach to the observed element and whether the
 *   element has been revealed. Once `true`, the value never goes back to
 *   `false`.
 */
export function useRevealOnScroll<T extends HTMLElement = HTMLDivElement>(
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.15,
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return [ref, isVisible];
}
