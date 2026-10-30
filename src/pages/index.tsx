import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import { translate } from "@docusaurus/Translate";
import HomepageHero from "@site/src/components/HomepageHero";
import HomepageStats from "@site/src/components/HomepageStats";
import ActivityPicker from "@site/src/components/ActivityPicker";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import DownloadSection from "@site/src/components/DownloadSection";

/**
 * Homepage of the ModulixOS website: the hero, then the bands it is made of,
 * each owning its own markup, copy and styles.
 */
export default function Home(): ReactNode {
  return (
    <Layout
      title={translate({
        id: "homepage.meta.title",
        message: "Modular by design",
        description: "Browser tab title of the homepage",
      })}
      description={translate({
        id: "homepage.meta.description",
        message:
          "ModulixOS is a modular, reproducible and lightweight operating system, built from a single declarative configuration.",
        description: "Meta description of the homepage",
      })}
    >
      <HomepageHero />
      <main>
        <HomepageStats />
        <ActivityPicker />
        <HomepageFeatures />
        <DownloadSection />
      </main>
    </Layout>
  );
}
