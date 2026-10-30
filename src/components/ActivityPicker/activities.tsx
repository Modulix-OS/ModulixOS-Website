import type { ReactNode } from "react";
import Translate from "@docusaurus/Translate";

/**
 * One mutually exclusive edition offered inside a card.
 *
 * @property id Identifier used as the React key.
 * @property label Edition name shown next to the radio.
 * @property checked Whether this edition is the one picked by default. Only
 *   the initial state reads it; later picks live in component state.
 */
export type Variant = {
  id: string;
  label: ReactNode;
  checked: boolean;
};

/**
 * One activity card, mirroring an `AppCard` of the ModulixOS installer.
 *
 * @property id Stable identifier, also used as the React key.
 * @property icons Basenames under `static/img/app-pack/`, one to four of them.
 * @property title Activity name.
 * @property description One line naming the software the activity brings in.
 * @property detail Optional third line spelling out the contents.
 * @property variants Optional editions shown as radios.
 * @property selected Whether the installer ticks the card by default.
 */
export type Activity = {
  id: string;
  icons: string[];
  title: ReactNode;
  description: ReactNode;
  detail?: ReactNode;
  variants?: Variant[];
  selected?: boolean;
};

/**
 * Activities the phone layout keeps, by {@link Activity.id}.
 *
 * At one column the full set runs to nine stacked cards, which buries the rest
 * of the page; these three are enough to show what the installer step does.
 * The others are dropped in CSS rather than here, so the server and the client
 * always render the same tree.
 */
export const PHONE_ACTIVITY_IDS = new Set(["base", "video", "gaming"]);

/**
 * Cards, icons and copy are kept in sync with
 * `modulixos-installer/src/steps/app_pack/mod.rs`; the icon basenames match the
 * `modulix-app-pack-*` aliases of its gresource.
 */
export const ACTIVITIES: Activity[] = [
  {
    id: "base",
    icons: ["firefox", "thunderbird", "nautilus", "printer"],
    selected: true,
    title: (
      <Translate id="activities.base.title" description="Activity name">
        Base pack
      </Translate>
    ),
    description: (
      <Translate
        id="activities.base.description"
        description="Activity summary"
      >
        The essentials, ready to use
      </Translate>
    ),
    detail: (
      <Translate
        id="activities.base.detail"
        description="Full application list of the base activity"
      >
        Web browser, email, file manager, terminal, printing, PDF reader, image
        viewer, archive manager, text editor, media player, and the Flathub app
        store
      </Translate>
    ),
  },
  {
    id: "office",
    icons: ["papers"],
    title: (
      <Translate id="activities.office.title" description="Activity name">
        Office suite
      </Translate>
    ),
    description: (
      <Translate
        id="activities.office.description"
        description="Activity summary"
      >
        Write documents, build spreadsheets and presentations
      </Translate>
    ),
  },
  {
    id: "modeling",
    icons: ["blender"],
    title: (
      <Translate id="activities.modeling.title" description="Activity name">
        3D modeling
      </Translate>
    ),
    description: (
      <Translate
        id="activities.modeling.description"
        description="Activity summary"
      >
        Model, animate and render in 3D with Blender
      </Translate>
    ),
  },
  {
    id: "video",
    icons: ["kdenlive", "davinci-resolve"],
    title: (
      <Translate id="activities.video.title" description="Activity name">
        Video editing
      </Translate>
    ),
    description: (
      <Translate
        id="activities.video.description"
        description="Activity summary"
      >
        Kdenlive and DaVinci Resolve
      </Translate>
    ),
    variants: [
      {
        id: "free",
        checked: true,
        label: (
          <Translate
            id="activities.video.variant.free"
            description="Edition of the video editing activity"
          >
            Free
          </Translate>
        ),
      },
      {
        id: "studio",
        checked: false,
        label: (
          <Translate
            id="activities.video.variant.studio"
            description="Edition of the video editing activity"
          >
            Studio
          </Translate>
        ),
      },
    ],
  },
  {
    id: "graphics",
    icons: ["gimp", "krita", "inkscape"],
    title: (
      <Translate id="activities.graphics.title" description="Activity name">
        Drawing and image editing
      </Translate>
    ),
    description: (
      <Translate
        id="activities.graphics.description"
        description="Activity summary"
      >
        GIMP, Krita and Inkscape
      </Translate>
    ),
  },
  {
    id: "streaming",
    icons: ["obs"],
    title: (
      <Translate id="activities.streaming.title" description="Activity name">
        Recording and streaming
      </Translate>
    ),
    description: (
      <Translate
        id="activities.streaming.description"
        description="Activity summary"
      >
        Record your screen and stream live with OBS Studio
      </Translate>
    ),
  },
  {
    id: "gaming",
    icons: ["steam", "lutris", "heroic", "gamepad"],
    title: (
      <Translate id="activities.gaming.title" description="Activity name">
        Gaming
      </Translate>
    ),
    description: (
      <Translate
        id="activities.gaming.description"
        description="Activity summary"
      >
        Steam, Lutris, Heroic and UMU, with controller support
      </Translate>
    ),
  },
  {
    id: "gamedev",
    icons: ["ue5"],
    title: (
      <Translate id="activities.gamedev.title" description="Activity name">
        Game development
      </Translate>
    ),
    description: (
      <Translate
        id="activities.gamedev.description"
        description="Activity summary"
      >
        Build games with the Unreal Engine 5 editor
      </Translate>
    ),
  },
  {
    id: "dev",
    icons: ["vscode", "git", "ubuntu"],
    title: (
      <Translate id="activities.dev.title" description="Activity name">
        Development
      </Translate>
    ),
    description: (
      <Translate id="activities.dev.description" description="Activity summary">
        VS Code, Git and an Ubuntu container
      </Translate>
    ),
  },
];

/**
 * Activities the installer ticks when the step opens.
 *
 * @returns The ids of the activities flagged {@link Activity.selected}.
 */
export function defaultSelection(): Set<string> {
  return new Set(
    ACTIVITIES.filter((activity) => activity.selected).map(
      (activity) => activity.id,
    ),
  );
}

/**
 * Edition picked by default for each activity that offers some.
 *
 * @returns Activity id mapped to the id of its initially checked variant,
 *   falling back to the first one when none is flagged. Activities without
 *   variants are absent from the result.
 */
export function defaultVariants(): Record<string, string> {
  const picks: Record<string, string> = {};
  for (const { id, variants } of ACTIVITIES) {
    const picked =
      variants?.find((variant) => variant.checked) ?? variants?.at(0);
    if (picked) {
      picks[id] = picked.id;
    }
  }
  return picks;
}
