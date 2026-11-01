import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type * as PluginSearchLocal from "@easyops-cn/docusaurus-search-local";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "ModulixOS",
  tagline:
    "The modular, reproducible operating system, tailored to your machine.",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Production url of the site. The QR code of the homepage builds its
  // absolute link from it, so it has to be the domain actually served.
  url: "https://www.modulixos.org",
  // The custom domain is declared in static/CNAME, so the site is served from
  // the root rather than from /<projectName>/.
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "Modulix-OS", // GitHub org owning the repository.
  projectName: "ModulixOS-Website", // Repository name.
  trailingSlash: false,

  onBrokenLinks: "throw",

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/svg+xml",
        href: "/img/logo.svg",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/img/apple-touch-icon.png",
      },
    },
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
  },

  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en", "fr"],
        indexDocs: true,
        indexBlog: true,
        indexPages: false,
        docsRouteBasePath: "/docs",
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchResultLimits: 8,
      } satisfies PluginSearchLocal.PluginOptions,
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Modulix-OS/ModulixOS-Website/tree/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Modulix-OS/ModulixOS-Website/tree/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "ModulixOS",
      logo: {
        alt: "ModulixOS logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/Modulix-OS",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Project",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/Modulix-OS",
            },
            {
              label: "Issues",
              href: "https://github.com/Modulix-OS/mxpkgs/issues",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ModulixOS. Built with Docusaurus. Icons from the <a href="https://www.gnome.org">GNOME Project</a> (Adwaita, CC BY-SA 3.0).`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
