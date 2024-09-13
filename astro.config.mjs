// @ts-check
import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [vue(), tailwind()],

  adapter: node({
    mode: "standalone",
  }),
  server: {
    // @ts-ignore
    port: parseInt(process.env.PORT) || 4321,
    host: true,
  },
});
