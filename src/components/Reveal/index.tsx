import type { ComponentPropsWithRef, CSSProperties, ReactNode } from "react";
import clsx from "clsx";
import { useRevealOnScroll } from "@site/src/hooks/useRevealOnScroll";

/**
 * Children of a revealed block, either plain nodes or a function of the
 * current visibility when the subtree has to react to it.
 */
type RevealChildren = ReactNode | ((isVisible: boolean) => ReactNode);

/**
 * Attributes a revealed block forwards to its `<div>`, minus the ones it
 * builds itself.
 */
type DivProps = Omit<ComponentPropsWithRef<"div">, "children">;

/**
 * Inline style carrying the stagger of one revealed element.
 *
 * @param delayMs Delay before the element starts its reveal transition, in
 *   milliseconds. Must be zero or more.
 * @returns A style object setting the `--mx-delay` custom property the shared
 *   `.mxReveal` rule reads.
 */
export function revealDelay(delayMs: number): CSSProperties {
  return { ["--mx-delay" as string]: `${delayMs}ms` };
}

/**
 * Resolves children that may be given as a function of the visibility.
 *
 * @param children Nodes, or a function called with `isVisible`.
 * @param isVisible Whether the block has been revealed.
 * @returns The nodes to render.
 */
function renderChildren(
  children: RevealChildren,
  isVisible: boolean,
): ReactNode {
  return typeof children === "function" ? children(isVisible) : children;
}

/**
 * Element that fades and slides in, driven by a visibility flag owned by an
 * ancestor rather than by its own observer.
 *
 * Use it for the items of a staggered grid: the grid holds the single
 * {@link Reveal} that watches the viewport, and each item stages itself off
 * the flag it hands down.
 *
 * @param props.isVisible Whether the item is revealed.
 * @param props.delayMs Stagger of this item, in milliseconds. Omit for none.
 * @param props.className Extra classes appended after the reveal ones.
 * @param props.style Extra style, merged under the stagger.
 * @param props.children Content of the item.
 */
export function RevealItem({
  isVisible,
  delayMs,
  className,
  style,
  children,
  ...rest
}: DivProps & {
  isVisible: boolean;
  delayMs?: number;
  children?: RevealChildren;
}): ReactNode {
  return (
    <div
      className={clsx("mxReveal", isVisible && "mxRevealVisible", className)}
      style={
        delayMs === undefined ? style : { ...style, ...revealDelay(delayMs) }
      }
      {...rest}
    >
      {renderChildren(children, isVisible)}
    </div>
  );
}

/**
 * Block that reveals itself the first time it scrolls into view.
 *
 * Wraps {@link useRevealOnScroll} together with the shared `.mxReveal`
 * classes, so a section only states what it wants revealed. Children given as
 * a function also receive the visibility, for subtrees that have to wait on it
 * — a count-up starting, a default selection ticking on.
 *
 * @param props.delayMs Stagger of this block, in milliseconds. Omit for none.
 * @param props.rootMargin Viewport margin applied before intersection is
 *   computed; see {@link useRevealOnScroll}.
 * @param props.threshold Visible fraction that triggers the reveal, between 0
 *   and 1.
 * @param props.className Extra classes appended after the reveal ones.
 * @param props.style Extra style, merged under the stagger.
 * @param props.children Content of the block, or a function of its visibility.
 */
export function Reveal({
  delayMs,
  rootMargin,
  threshold,
  className,
  style,
  children,
  ...rest
}: DivProps & {
  delayMs?: number;
  rootMargin?: string;
  threshold?: number;
  children?: RevealChildren;
}): ReactNode {
  const [ref, isVisible] = useRevealOnScroll<HTMLDivElement>(
    rootMargin,
    threshold,
  );

  return (
    <RevealItem
      ref={ref}
      isVisible={isVisible}
      delayMs={delayMs}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </RevealItem>
  );
}
