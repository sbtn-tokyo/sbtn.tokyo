import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [icon({
    include: {
      mdi: ["minecraft"],
      "fa-brands": ["discord"],
      ph: ["handshake-fill"],
      ri: ["bluesky-fill"],
      "fa6-brands": ["x-twitter", "telegram", "mastodon", "wikipedia-w"],
      "simple-icons": ["misskey"]
    },
  }),, tailwind()]
});
