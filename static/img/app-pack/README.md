# Application icons

Copied verbatim from the [Papirus icon theme][papirus], licensed **GPL-3.0**,
version `20260801` as packaged by nixpkgs.

They are not edited here. Re-sync them with:

```sh
PAPIRUS_ICON_THEME_48=$(nix build --no-link --print-out-paths \
  nixpkgs#papirus-icon-theme)/share/icons/Papirus/48x48 \
  bun run sync-icons
```

The alias names match `data/resources.gresource.xml` in `modulixos-installer`,
which resolves the same icons out of the same derivation, so the installer and
the website show identical artwork for a given activity card.

| File | Source path in the theme |
| --- | --- |
| `firefox.svg` | `apps/firefox.svg` |
| `nautilus.svg` | `apps/org.gnome.Nautilus.svg` |
| `thunderbird.svg` | `apps/thunderbird.svg` |
| `steam.svg` | `apps/steam.svg` |
| `lutris.svg` | `apps/lutris.svg` |
| `heroic.svg` | `apps/heroic.svg` |
| `kdenlive.svg` | `apps/kdenlive.svg` |
| `davinci-resolve.svg` | `apps/resolve.svg` |
| `obs.svg` | `apps/obs.svg` |
| `krita.svg` | `apps/krita.svg` |
| `gimp.svg` | `apps/gimp.svg` |
| `blender.svg` | `apps/blender.svg` |
| `papers.svg` | `apps/org.gnome.Papers.svg` |
| `inkscape.svg` | `apps/inkscape.svg` |
| `ue5.svg` | `apps/ue4editor.svg` |
| `vscode.svg` | `apps/vscode.svg` |
| `git.svg` | `apps/git.svg` |
| `ubuntu.svg` | `apps/distributor-logo-ubuntu.svg` |
| `gamepad.svg` | `devices/input-gaming.svg` |
| `printer.svg` | `devices/printer.svg` |

Application names and logos remain trademarks of their respective owners.

[papirus]: https://github.com/PapirusDevelopmentTeam/papirus-icon-theme
