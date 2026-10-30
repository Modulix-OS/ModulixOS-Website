import type { ReactNode, SVGProps } from "react";

/**
 * Line icon drawn on the shared geometry: a square viewBox, no fill, the
 * current colour as stroke and round caps and joins.
 *
 * Every glyph of the site is built on it, so one icon only states its paths
 * and, when it departs from the defaults, its viewBox or stroke width.
 *
 * @param props.viewBox Coordinate system the paths are drawn in. Defaults to
 *   the 24×24 grid the icon set is designed on.
 * @param props.strokeWidth Stroke width in viewBox units.
 * @param props.children Paths and shapes of the glyph. Must be given.
 * @param props Remaining standard SVG attributes, forwarded to the root
 *   `<svg>`; `aria-hidden` is set but can be overridden for a meaningful icon.
 */
export function StrokeIcon({
  viewBox = "0 0 24 24",
  strokeWidth = 1.6,
  children,
  ...props
}: SVGProps<SVGSVGElement>): ReactNode {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}
