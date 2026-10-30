import { useState, type ReactNode } from "react";
import Heading from "@theme/Heading";
import Translate from "@docusaurus/Translate";
import { DownloadButtons, ImageMeta } from "@site/src/components/Download";
import { Reveal } from "@site/src/components/Reveal";
import ModulixWordmark from "@site/static/img/modulix-text-auto.svg";
import AppIcon from "./AppIcon";
import InstallHelp from "./InstallHelp";
import styles from "./styles.module.css";

/**
 * Homepage hero laid out like a libadwaita status page: the app icon, the
 * wordmark, a short description and a pill-shaped suggested action, on the flat
 * window background with a film-grain overlay.
 *
 * Starting the ISO download mounts {@link InstallHelp} under the buttons; the
 * anchor keeps its default action, so the browser goes on fetching the image
 * as an attachment while the panel appears.
 */
export default function HomepageHero(): ReactNode {
  const [isDownloadStarted, setDownloadStarted] = useState(false);

  return (
    <header className={styles.hero}>
      <div className={styles.grain} aria-hidden="true" />

      <div className="container">
        <Reveal className={styles.statusPage} rootMargin="0px" threshold={0}>
          <AppIcon />

          <Heading as="h1" className={styles.heroTitle}>
            <ModulixWordmark
              className={styles.wordmark}
              role="img"
              aria-label="ModulixOS"
            />
          </Heading>

          <p className={styles.heroSubtitle}>
            <Translate
              id="homepage.hero.subtitle"
              description="Tagline displayed under the homepage title"
            >
              The modular, reproducible operating system, tailored to your
              machine.
            </Translate>
          </p>

          <div className={styles.heroButtons}>
            <DownloadButtons onDownload={() => setDownloadStarted(true)} />
          </div>

          {isDownloadStarted ? <InstallHelp /> : null}

          <ImageMeta className={styles.heroMeta} />
        </Reveal>
      </div>
    </header>
  );
}
