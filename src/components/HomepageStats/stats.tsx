import type { ReactNode } from "react";
import Translate from "@docusaurus/Translate";

/**
 * One key figure displayed in the homepage stats band.
 *
 * @property countTo Numeric value to animate up to. When omitted, `display` is
 *   rendered as-is without animation.
 * @property display Literal value shown when `countTo` is not provided.
 * @property suffix Unit appended right after the animated number.
 * @property label Short caption describing the figure.
 */
export type StatItem = {
  countTo?: number;
  display?: string;
  suffix?: string;
  label: ReactNode;
};

/**
 * The module figure mirrors the key count of `modules/index.json` in mxpkgs
 * (`github:Modulix-OS/mxpkgs`), a hand-maintained index, so it has to be bumped
 * here whenever that file grows:
 *
 *     bun -e 'console.log(Object.keys(await Bun.file("modules/index.json").json()).length)'
 */
export const STATS: StatItem[] = [
  {
    countTo: 44,
    label: (
      <Translate
        id="homepage.stats.modules.label"
        description="Caption of the available modules stat"
      >
        Modules available
      </Translate>
    ),
  },
  {
    countTo: 1,
    label: (
      <Translate
        id="homepage.stats.click.label"
        description="Caption of the single click stat"
      >
        Click to play, create, work
      </Translate>
    ),
  },
  {
    countTo: 0,
    label: (
      <Translate
        id="homepage.stats.maintenance.label"
        description="Caption of the zero maintenance stat"
      >
        Maintenance
      </Translate>
    ),
  },
  {
    countTo: 0,
    label: (
      <Translate
        id="homepage.stats.unwanted.label"
        description="Caption of the zero unwanted software stat"
      >
        Unwanted software
      </Translate>
    ),
  },
];
