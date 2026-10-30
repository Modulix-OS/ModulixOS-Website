import type { ComponentType, ReactNode, SVGProps } from "react";
import Translate from "@docusaurus/Translate";
import {
  AtomicUpdateIcon,
  ModularIcon,
  OneClickIcon,
} from "@site/src/components/Icons";

/**
 * One feature advertised on the homepage.
 *
 * @property Icon Inline icon component; inherits its colour from the card via
 *   `currentColor`.
 * @property title Short feature name.
 * @property description One or two sentences expanding on the title.
 */
export type FeatureItem = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: ReactNode;
  description: ReactNode;
};

export const FEATURES: FeatureItem[] = [
  {
    Icon: OneClickIcon,
    title: (
      <Translate
        id="homepage.features.oneClick.title"
        description="Title of the first homepage feature card"
      >
        One click, that's it
      </Translate>
    ),
    description: (
      <Translate
        id="homepage.features.oneClick.description"
        description="Body of the first homepage feature card"
      >
        Tick your activities in the installer and ModulixOS assembles the rest —
        packages, drivers, services. No command line, no file to edit.
      </Translate>
    ),
  },
  {
    Icon: AtomicUpdateIcon,
    title: (
      <Translate
        id="homepage.features.noMaintenance.title"
        description="Title of the second homepage feature card"
      >
        Zero maintenance
      </Translate>
    ),
    description: (
      <Translate
        id="homepage.features.noMaintenance.description"
        description="Body of the second homepage feature card"
      >
        Atomic updates, and the system you had before still bootable if one of
        them breaks. Nothing to watch, nothing to repair.
      </Translate>
    ),
  },
  {
    Icon: ModularIcon,
    title: (
      <Translate
        id="homepage.features.noConfig.title"
        description="Title of the third homepage feature card"
      >
        Zero configuration
      </Translate>
    ),
    description: (
      <Translate
        id="homepage.features.noConfig.description"
        description="Body of the third homepage feature card"
      >
        Every module is a checkbox. The dependencies, drivers and services
        behind it are Modulix's problem, not yours.
      </Translate>
    ),
  },
];
