/**
 * Where the published image and the installation guide live.
 *
 * The hero and the closing band both build their actions from these, so the
 * two can never drift apart.
 */

/** Path of the installation guide, relative to the site base URL. */
export const INSTALL_DOC_URL = "/docs/installation";

/** Absolute URL of the installer image offered for download. */
export const ISO_URL = "http://iso.modulixos.org:8080/modulixos-installer.iso";

/** Absolute URL of the SHA-256 checksum of {@link ISO_URL}. */
export const CHECKSUM_URL = `${ISO_URL}.sha256`;
