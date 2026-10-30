import type { ReactNode } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

/**
 * Application icon of the hero, drawn twice: once blurred and blackened as its
 * own drop shadow, once on top at full colour.
 *
 * Both copies are decorative — the wordmark right below already names the
 * project — so neither is exposed to assistive technology.
 */
export default function AppIcon(): ReactNode {
  const logoUrl = useBaseUrl("img/logo.svg");

  return (
    <div className={styles.appIconWrap}>
      <img
        className={styles.appIconShadow}
        src={logoUrl}
        alt=""
        aria-hidden="true"
        width={96}
        height={96}
      />
      <img
        className={styles.appIcon}
        src={logoUrl}
        alt=""
        aria-hidden="true"
        width={96}
        height={96}
      />
    </div>
  );
}
