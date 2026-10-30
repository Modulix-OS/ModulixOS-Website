import type { ReactNode } from "react";
import { QRCodeSVG } from "qrcode.react";
import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { INSTALL_DOC_URL } from "./config";
import styles from "./styles.module.css";

/**
 * QR code pointing at the installation guide, with its caption underneath.
 *
 * The code encodes an absolute URL built from `siteConfig.url`, so a phone
 * scanning it off the screen reaches the published site rather than a relative
 * path it cannot resolve.
 *
 * @param props.size Side of the code in pixels. Must be large enough for the
 *   quiet-zone-free layout to stay scannable.
 */
export default function InstallGuideQr({ size }: { size: number }): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const installDocUrl = useBaseUrl(INSTALL_DOC_URL);
  const installDocAbsoluteUrl = new URL(
    installDocUrl,
    siteConfig.url,
  ).toString();

  return (
    <>
      <div className={styles.qrCard}>
        <QRCodeSVG
          value={installDocAbsoluteUrl}
          size={size}
          bgColor="#ffffff"
          fgColor="#16212f"
          level="M"
          marginSize={0}
          title={installDocAbsoluteUrl}
        />
      </div>

      <p className={styles.qrCaption}>
        <Translate
          id="homepage.download.qrCaption"
          description="Caption under the QR code pointing at the installation guide"
        >
          Scan to open the guide on your phone.
        </Translate>
      </p>
    </>
  );
}
