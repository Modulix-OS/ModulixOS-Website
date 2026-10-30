import { useId, type ReactNode } from "react";
import Translate from "@docusaurus/Translate";
import { Reveal } from "@site/src/components/Reveal";
import SectionIntro from "@site/src/components/SectionIntro";
import ActivityGrid from "./ActivityGrid";
import styles from "./styles.module.css";

/**
 * Homepage section reproducing the ModulixOS installer screen where the user
 * picks the activities to provision.
 *
 * The cards, icons, wording and default ticks are the ones `steps::app_pack`
 * renders in the installer; the visitor can toggle them here to try the screen
 * out, but nothing is persisted or sent anywhere.
 */
export default function ActivityPicker(): ReactNode {
  const headingId = useId();

  return (
    <section className={styles.section}>
      <div className="container">
        <SectionIntro
          titleId={headingId}
          eyebrow={
            <Translate
              id="activities.section.eyebrow"
              description="Badge marking the activity picker as a reproduction of the installer"
            >
              Installer preview
            </Translate>
          }
          title={
            <Translate
              id="activities.section.title"
              description="Title of the activity picker section"
            >
              Select your activities
            </Translate>
          }
          subtitle={
            <Translate
              id="activities.section.subtitle"
              description="Subtitle of the activity picker section"
            >
              The essential applications will be installed for each activity
            </Translate>
          }
        />

        <Reveal rootMargin="0px 0px -6% 0px" threshold={0.05}>
          {(isVisible) => (
            <ActivityGrid headingId={headingId} isVisible={isVisible} />
          )}
        </Reveal>

        <p className={styles.caption}>
          <Translate
            id="activities.section.caption"
            description="Caption stating the section reproduces the real installer screen"
          >
            You will be able to select your activities in the installer.
          </Translate>
        </p>
      </div>
    </section>
  );
}
