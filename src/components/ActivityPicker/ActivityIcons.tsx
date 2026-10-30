import type { ReactNode } from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

/**
 * Icon block of a card.
 *
 * A lone icon is laid out on its own at full size; two to four icons form a
 * two-column collage of smaller tiles, an odd third one spanning both columns
 * so it stays centred — the arrangement `icon_widget_for` produces in the
 * installer.
 *
 * @param props.icons Basenames under `static/img/app-pack/`. Must hold one to
 *   four entries.
 */
export default function ActivityIcons({
  icons,
}: {
  icons: readonly string[];
}): ReactNode {
  const base = useBaseUrl("img/app-pack/");
  const isCollage = icons.length > 1;

  return (
    <span className={clsx(styles.icons, isCollage && styles.iconsCollage)}>
      {icons.map((icon) => (
        <img
          key={icon}
          className={isCollage ? styles.iconTile : styles.iconSingle}
          src={`${base}${icon}.svg`}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
      ))}
    </span>
  );
}
