import type { ReactNode, SVGProps } from "react";
import { StrokeIcon } from "./StrokeIcon";
import { SymbolicIcon } from "./SymbolicIcon";

export { StrokeIcon } from "./StrokeIcon";
export { SymbolicIcon } from "./SymbolicIcon";

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
 * Puzzle piece, standing for a system assembled module by module.
 *
 * Adwaita `application-x-addon-symbolic`, GNOME Project.
 *
 * @param props Standard SVG attributes forwarded to the root `<svg>`.
 */
export function ModularIcon(props: SVGProps<SVGSVGElement>): ReactNode {
  return (
    <SymbolicIcon {...props}>
      <path d="m 7.03125 0.015625 c -1.109375 0 -2 0.890625 -2 2 v 1 h -3.015625 c -1.109375 0 -2 0.890625 -2 2 v 2 h 1.015625 c 1.105469 0 2 0.890625 2 2 s -0.894531 2 -2 2 h -1.015625 v 2.988281 c 0 1.105469 0.890625 2 2 2 h 3.015625 v -0.988281 c 0 -1.109375 0.890625 -2 2 -2 c 1.105469 0 2 0.890625 2 2 v 0.988281 h 2 c 1.105469 0 2 -0.894531 2 -2 v -2.988281 h 1 c 1.105469 0 2 -0.890625 2 -2 s -0.894531 -2 -2 -2 h -1 v -2 c 0 -1.109375 -0.894531 -2 -2 -2 h -2 v -1 c 0 -1.109375 -0.894531 -2 -2 -2 z" />
    </SymbolicIcon>
  );
}

/**
 * Update badge, standing for an atomic update that can always be rolled back
 * to the system that worked before it.
 *
 * Adwaita `software-update-available-symbolic`, GNOME Project.
 *
 * @param props Standard SVG attributes forwarded to the root `<svg>`.
 */
export function AtomicUpdateIcon(props: SVGProps<SVGSVGElement>): ReactNode {
  return (
    <SymbolicIcon {...props}>
      <path d="m 8 0 c -0.257812 0 -0.511719 0.0976562 -0.707031 0.292969 l -1.707031 1.707031 h -2.585938 c -0.550781 0 -1 0.449219 -1 1 v 2.585938 l -1.707031 1.707031 c -0.3906252 0.390625 -0.3906252 1.023437 0 1.414062 l 1.707031 1.707031 v 2.585938 c 0 0.550781 0.449219 1 1 1 h 2.585938 l 1.707031 1.707031 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 l 1.707031 -1.707031 h 2.585938 c 0.550781 0 1 -0.449219 1 -1 v -2.585938 l 1.707031 -1.707031 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414062 l -1.707031 -1.707031 v -2.585938 c 0 -0.550781 -0.449219 -1 -1 -1 h -2.585938 l -1.707031 -1.707031 c -0.195312 -0.1953128 -0.449219 -0.292969 -0.707031 -0.292969 z m 0 5 c 0.257812 0 0.511719 0.097656 0.707031 0.292969 l 2 2 c 0.183594 0.1875 0.289063 0.441406 0.285157 0.707031 h 0.007812 v 1 h -2 v 2 h -2 v -2 h -2 v -1 h 0.007812 c -0.003906 -0.265625 0.101563 -0.519531 0.285157 -0.707031 l 2 -2 c 0.195312 -0.195313 0.449219 -0.292969 0.707031 -0.292969 z" />
    </SymbolicIcon>
  );
}

/**
 * Mouse, standing for the single click the installer asks for.
 *
 * Adwaita `input-mouse-symbolic`, GNOME Project.
 *
 * @param props Standard SVG attributes forwarded to the root `<svg>`.
 */
export function OneClickIcon(props: SVGProps<SVGSVGElement>): ReactNode {
  return (
    <SymbolicIcon {...props}>
      <path d="m 7.03125 0 c -2.753906 0 -5 2.246094 -5 5 v 6 c 0 2.753906 2.246094 5 5 5 h 1.96875 c 2.753906 0 5 -2.246094 5 -5 v -6 c 0 -2.753906 -2.246094 -5 -5 -5 z m 0 2 h 1.96875 c 1.679688 0 3 1.320312 3 3 v 6 c 0 1.679688 -1.320312 3 -3 3 h -1.96875 c -1.679688 0 -3 -1.320312 -3 -3 v -6 c 0 -1.679688 1.320312 -3 3 -3 z m 0.96875 1 c -0.554688 0 -1 0.445312 -1 1 v 2 c 0 0.554688 0.445312 1 1 1 s 1 -0.445312 1 -1 v -2 c 0 -0.554688 -0.445312 -1 -1 -1 z" />
    </SymbolicIcon>
  );
}

/**
 * Game controller, standing for the headroom a lean system leaves to games.
 *
 * Adwaita `input-gaming-symbolic`, GNOME Project.
 *
 * @param props Standard SVG attributes forwarded to the root `<svg>`.
 */
export function GamepadIcon(props: SVGProps<SVGSVGElement>): ReactNode {
  return (
    <SymbolicIcon {...props}>
      <path d="m 3.46875 2 c -1.660156 0 -2.800781 1 -3 3 c 0 0 -0.5 3 -0.5 5 c 0 0 0 3 3.03125 3 c 2.96875 0 2.96875 -3 2.96875 -3 c 0 -1.5 1.050781 -2.003906 2 -2 c 0.941406 0.003906 2 0.5 2.03125 2 c 0 0 -0.03125 3 2.96875 3 s 3 -3 3 -3 c 0.03125 -2 -0.5 -5 -0.5 -5 c -0.164062 -1.652344 -1.339844 -3 -3 -3 z m 0.75 2 h 0.5 c 0.136719 0 0.25 0.113281 0.25 0.25 v 0.75 h 0.75 c 0.136719 0 0.25 0.113281 0.25 0.25 v 0.5 c 0 0.136719 -0.113281 0.25 -0.25 0.25 h -0.75 v 0.75 c 0 0.136719 -0.113281 0.25 -0.25 0.25 h -0.5 c -0.136719 0 -0.25 -0.113281 -0.25 -0.25 v -0.75 h -0.75 c -0.136719 0 -0.25 -0.113281 -0.25 -0.25 v -0.5 c 0 -0.136719 0.113281 -0.25 0.25 -0.25 h 0.75 v -0.75 c 0 -0.136719 0.113281 -0.25 0.25 -0.25 z m 5.75 0 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 3 2 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z" />
    </SymbolicIcon>
  );
}

/**
 * Desktop computer, standing for a machine that keeps running instead of
 * being replaced.
 *
 * Adwaita `computer-symbolic`, GNOME Project.
 *
 * @param props Standard SVG attributes forwarded to the root `<svg>`.
 */
export function KeepHardwareIcon(props: SVGProps<SVGSVGElement>): ReactNode {
  return (
    <SymbolicIcon {...props}>
      <path d="m 3 0 c -1.660156 0 -3 1.339844 -3 3 v 7 c 0 1.660156 1.339844 3 3 3 h 10 c 1.660156 0 3 -1.339844 3 -3 v -7 c 0 -1.660156 -1.339844 -3 -3 -3 z m 0 2 h 10 c 0.554688 0 1 0.445312 1 1 v 7 c 0 0.554688 -0.445312 1 -1 1 h -10 c -0.554688 0 -1 -0.445312 -1 -1 v -7 c 0 -0.554688 0.445312 -1 1 -1 z m 2 12 c -1.105469 0 -2 0.894531 -2 2 h 10 c 0 -1.105469 -0.894531 -2 -2 -2 z" />
    </SymbolicIcon>
  );
}
