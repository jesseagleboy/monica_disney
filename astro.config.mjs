import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: 'https://magicaladventuresbymonica.com/',
  integrations: [ tailwind( {
    applyBaseStyles: false,
  }), mdx(), sitemap()],
  output: "static",
  adapter: vercel()
});