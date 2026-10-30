import type { ReactNode } from "react";
import {
  DownloadButtons,
  ImageMeta,
  InstallGuideLink,
  InstallGuideQr,
} from "@site/src/components/Download";
import { Reveal } from "@site/src/components/Reveal";
import styles from "./styles.module.css";

/** Side of the QR code of the closing band, in pixels. */
const QR_SIZE = 118;

/**
 * Closing band of the homepage: the download action and the QR code side by
 * side in a centred box, with the guide link on its own line underneath.
 */
export default function DownloadSection(): ReactNode {
  return (
    <section className={styles.download}>
      <div className="container">
        <Reveal className={styles.downloadInner}>
          <div className={styles.downloadRow}>
            <div className={styles.downloadMain}>
              <DownloadButtons />
              <ImageMeta />
            </div>

            <div className={styles.downloadAside}>
              <InstallGuideQr size={QR_SIZE} />
            </div>
          </div>

          <InstallGuideLink />
        </Reveal>
      </div>
    </section>
  );
}
