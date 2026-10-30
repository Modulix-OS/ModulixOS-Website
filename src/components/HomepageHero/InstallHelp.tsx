import type { ReactNode } from "react";
import Translate from "@docusaurus/Translate";
import {
  InstallGuideLink,
  InstallGuideQr,
} from "@site/src/components/Download";
import styles from "./styles.module.css";

/** Side of the hero QR code, in pixels. */
const QR_SIZE = 132;

/**
 * Panel revealed under the hero buttons once the ISO download starts: the next
 * step spelled out, the guide button and its QR code.
 */
export default function InstallHelp(): ReactNode {
  return (
    <div className={styles.installHelp}>
      <p className={styles.installHelpTitle}>
        <Translate
          id="homepage.hero.install.started"
          description="Line shown under the hero buttons once the ISO download starts"
        >
          Your download has started. Next step: the installation guide.
        </Translate>
      </p>

      <InstallGuideLink />
      <InstallGuideQr size={QR_SIZE} />
    </div>
  );
}
