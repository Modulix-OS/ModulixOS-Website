import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import { ChecksumIcon, DownloadIcon } from "@site/src/components/Icons";
import { CHECKSUM_URL, ISO_URL } from "./config";

/**
 * Suggested ISO download paired with its checksum, as a libadwaita split
 * button.
 *
 * @param props.onDownload Called when the ISO anchor is activated. The anchor
 *   default action is preserved, so the browser keeps fetching the image.
 */
export default function DownloadButtons({
  onDownload,
}: {
  onDownload?: () => void;
}): ReactNode {
  const checksumLabel = translate({
    id: "homepage.download.checksum",
    message: "SHA-256 checksum",
    description: "Label of the SHA-256 checksum button",
  });

  return (
    <div className="mxSplitButton">
      <Link className="mxSuggested" href={ISO_URL} onClick={onDownload}>
        <DownloadIcon className="mxCtaIcon" />
        <Translate
          id="homepage.download.cta"
          description="Label of the ISO download button"
        >
          Download the ISO
        </Translate>
      </Link>
      <Link
        className="mxIconButton"
        href={CHECKSUM_URL}
        title={checksumLabel}
        aria-label={checksumLabel}
      >
        <ChecksumIcon className="mxIconButtonGlyph" />
      </Link>
    </div>
  );
}
