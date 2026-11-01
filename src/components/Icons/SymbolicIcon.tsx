import type { ReactNode, SVGProps } from "react";

/**
 * Symbolic icon drawn on the Adwaita geometry: a 16×16 viewBox, solid shapes
 * filled with the current colour and no stroke at all.
 *
 * It is the counterpart of `StrokeIcon` for the glyphs reused from the GNOME
 * Adwaita icon theme, whose paths are plain filled outlines; an icon built on
 * it only states its paths and, when it departs from the defaults, its
 * viewBox.
 *
 * @param props.viewBox Coordinate system the paths are drawn in. Defaults to
 *   the 16×16 grid Adwaita symbolic icons are designed on.
 * @param props.children Paths and shapes of the glyph. Must be given, and must
 *   carry no `fill` of their own so the root colour applies.
 * @param props Remaining standard SVG attributes, forwarded to the root
 *   `<svg>`; `aria-hidden` is set but can be overridden for a meaningful icon.
 */
export function SymbolicIcon({
  viewBox = "0 0 16 16",
  children,
  ...props
}: SVGProps<SVGSVGElement>): ReactNode {
  return (
    <svg viewBox={viewBox} fill="currentColor" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}
