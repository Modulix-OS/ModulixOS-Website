# Adwaita icon theme

The homepage feature glyphs in `src/components/Icons/index.tsx` reuse paths taken
verbatim from the GNOME Adwaita icon theme, version 50.0:

| Component | Upstream icon |
| --- | --- |
| `ModularIcon` | `mimetypes/application-x-addon-symbolic` |
| `AtomicUpdateIcon` | `status/software-update-available-symbolic` |
| `OneClickIcon` | `devices/input-mouse-symbolic` |
| `GamepadIcon` | `devices/input-gaming-symbolic` |
| `KeepHardwareIcon` | `devices/computer-symbolic` |

Artwork by the [GNOME Project](https://www.gnome.org), licensed under either the
GNU LGPL v3 or the Creative Commons Attribution-Share Alike 3.0 United States
License. See `COPYING` and `COPYING_CCBYSA3`.

Only the `fill` colour was dropped from each path, so the glyph inherits the
colour of its card, and the trailing no-op subpath left by the upstream
exporter was removed. The coordinates are unchanged.
