import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import { INSTALL_DOC_URL } from "./config";

/**
 * Link to the installation guide, styled as a flat button.
 */
export default function InstallGuideLink(): ReactNode {
  return (
    <Link className="mxFlatButton" to={INSTALL_DOC_URL}>
      <Translate
        id="homepage.download.docs"
        description="Label of the button opening the installation guide"
      >
        See the installation guide
      </Translate>
    </Link>
  );
}
