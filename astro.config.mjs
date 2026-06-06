// @ts-check

import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Contributor Manual",
      logo: {
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
        replacesTitle: true,
      },
      sidebar: [
        {
          label: "Start Here",
          items: ["getting-started"],
        },
        {
          label: "Guides",
          items: ["guides/setup", "guides/new-pdfs", "guides/building-forms"],
        },
      ],
      social: [
        {
          icon: "discord",
          label: "Discord",
          href: "https://namesake.fyi/chat",
        },
        {
          icon: "blueSky",
          label: "Bluesky",
          href: "https://bsky.app/profile/namesake.fyi",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/namesakefyi",
        },
      ],
      customCss: ["./src/styles/theme.css"],
    }),
  ],
  devToolbar: {
    enabled: false,
  },
});
