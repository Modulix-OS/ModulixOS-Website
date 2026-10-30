import type { ReactNode } from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import styles from "./styles.module.css";

/**
 * Small print about the published image, shown under every download action so
 * the hero and the closing band state the same thing.
 *
 * @param props.className Extra class for the surrounding section to adjust the
 *   spacing it needs. Omit to keep the plain small print.
 */
export default function ImageMeta({
  className,
}: {
  className?: string;
}): ReactNode {
  return (
    <p className={clsx(styles.meta, className)}>
      <Translate
        id="homepage.download.meta"
        description="Small print about the published image"
      >
        x86_64 live image · verified checksums · GPL-3.0
      </Translate>
    </p>
  );
}
