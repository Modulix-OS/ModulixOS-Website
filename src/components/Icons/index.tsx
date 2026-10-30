import type { ReactNode, SVGProps } from "react";
import { StrokeIcon } from "./StrokeIcon";

export { StrokeIcon } from "./StrokeIcon";

/**
 * Downward arrow onto a tray, marking the ISO download action.
 *
 * @param props Standard SVG attributes forwarded to the root `<svg>`.
 */
export function DownloadIcon(props: SVGProps<SVGSVGElement>): ReactNode {
  return (
    <StrokeIcon strokeWidth={2} {...props}>
      <path d="M12 3v11" />
      <path d="M7.5 10 12 14.5 16.5 10" />
      <path d="M4.5 19.5h15" />
    </StrokeIcon>
  );
}

/**
 * Clipboard carrying a check mark, marking the SHA-256 checksum action.
 *
 * @param props Standard SVG attributes forwarded to the root `<svg>`.
 */
export function ChecksumIcon(props: SVGProps<SVGSVGElement>): ReactNode {
  return (
    <StrokeIcon strokeWidth={1.9} {...props}>
      <path d="M9 4.5h6a1 1 0 0 1 1 1v1H8v-1a1 1 0 0 1 1-1Z" />
      <path d="M16 6h1.5a1.5 1.5 0 0 1 1.5 1.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 18.5v-11A1.5 1.5 0 0 1 6.5 6H8" />
      <path d="m9.25 13 2 2 3.5-3.5" />
    </StrokeIcon>
  );
}

/**
 * Check mark drawn inside a ticked checkbox.
 *
 * @param props Standard SVG attributes forwarded to the root `<svg>`.
 */
export function CheckIcon(props: SVGProps<SVGSVGElement>): ReactNode {
  return (
    <StrokeIcon viewBox="0 0 16 16" strokeWidth={2.1} {...props}>
      <path d="m3.5 8.4 2.9 2.9 6.1-6.6" />
    </StrokeIcon>
  );
}

/**
 * Stacked blocks, standing for a system assembled module by module.
 *
 * @param props Standard SVG attributes forwarded to the root `<svg>`.
 */
export function ModularIcon(props: SVGProps<SVGSVGElement>): ReactNode {
  return (
    <StrokeIcon {...props}>
      <rect x="3" y="3" width="7.5" height="7.5" rx="2" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="2" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="2" />
      <path d="M17.25 13.5v7.5M13.5 17.25h7.5" />
    </StrokeIcon>
  );
}

/**
 * Circular arrows around a plus sign, standing for an update that can always
 * be rolled back to the system that worked before it.
 *
 * @param props Standard SVG attributes forwarded to the root `<svg>`.
 */
export function AtomicUpdateIcon(props: SVGProps<SVGSVGElement>): ReactNode {
  return (
    <StrokeIcon {...props}>
      <path d="M20.5 12a8.5 8.5 0 0 1-14.3 6.2" />
      <path d="M3.5 12a8.5 8.5 0 0 1 14.3-6.2" />
      <path d="M17.8 2.4v3.4h-3.4M6.2 21.6v-3.4h3.4" />
      <path d="M9.6 12h4.8M12 9.6v4.8" />
    </StrokeIcon>
  );
}

/**
 * Mouse pointer with motion rays, standing for the single click the installer
 * asks for.
 *
 * @param props Standard SVG attributes forwarded to the root `<svg>`.
 */
export function OneClickIcon(props: SVGProps<SVGSVGElement>): ReactNode {
  return (
    <StrokeIcon {...props}>
      <path d="M6.6 4.4 17.1 11.7l-4.6 1.2 2.6 5.2-2.3 1.1-2.6-5.2-3.6 3Z" />
      <path d="M16.9 3.1V1.6M19.4 4.7 20.9 3.2M20.9 7.4h1.5" />
    </StrokeIcon>
  );
}
