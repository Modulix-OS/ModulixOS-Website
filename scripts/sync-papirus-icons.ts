/// <reference types="bun" />

/**
 * Copies the application icons the homepage activity picker needs out of the
 * Papirus icon theme (GPL-3.0) into `static/img/app-pack/`.
 *
 * The source directory comes from `PAPIRUS_ICON_THEME_48`, the same contract
 * `modulixos-installer/build.rs` uses, so both projects pull from one pinned
 * derivation:
 *
 *     PAPIRUS_ICON_THEME_48=$(nix build --no-link --print-out-paths \
 *       nixpkgs#papirus-icon-theme)/share/icons/Papirus/48x48 \
 *       bun run sync-icons
 *
 * The alias names mirror `modulixos-installer/data/resources.gresource.xml`
 * so a card's icons can be traced from one file to the other.
 */

import { mkdir } from "node:fs/promises";
import { join } from "node:path";

/** Published basename (without extension) mapped to its path inside the theme. */
const ICONS: Record<string, string> = {
  firefox: "apps/firefox.svg",
  nautilus: "apps/org.gnome.Nautilus.svg",
  thunderbird: "apps/thunderbird.svg",
  steam: "apps/steam.svg",
  lutris: "apps/lutris.svg",
  heroic: "apps/heroic.svg",
  kdenlive: "apps/kdenlive.svg",
  "davinci-resolve": "apps/resolve.svg",
  obs: "apps/obs.svg",
  krita: "apps/krita.svg",
  gimp: "apps/gimp.svg",
  blender: "apps/blender.svg",
  papers: "apps/org.gnome.Papers.svg",
  inkscape: "apps/inkscape.svg",
  ue5: "apps/ue4editor.svg",
  vscode: "apps/vscode.svg",
  git: "apps/git.svg",
  ubuntu: "apps/distributor-logo-ubuntu.svg",
  gamepad: "devices/input-gaming.svg",
  printer: "devices/printer.svg",
};

const DESTINATION = "static/img/app-pack";

const source = process.env.PAPIRUS_ICON_THEME_48;
if (!source) {
  console.error(
    "PAPIRUS_ICON_THEME_48 must point at a Papirus 48x48 directory.",
  );
  process.exit(1);
}

await mkdir(DESTINATION, { recursive: true });

for (const [alias, relative] of Object.entries(ICONS)) {
  const input = Bun.file(join(source, relative));
  if (!(await input.exists())) {
    console.error(`missing in theme: ${relative}`);
    process.exit(1);
  }
  await Bun.write(join(DESTINATION, `${alias}.svg`), input);
}

console.log(`${Object.keys(ICONS).length} icons synced into ${DESTINATION}`);
