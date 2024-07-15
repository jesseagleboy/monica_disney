import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/static";
import partytown from "@astrojs/partytown";
import vercel from "@astrojs/vercel/static";
import qwikdev from "@qwikdev/astro";

// https://astro.build/config
export default defineConfig({
	site: "https://magicaladventuresbymonica.com/",
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		mdx(),
		sitemap(),
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
		qwikdev(),
	],
	output: "static",

	adapter: vercel(),
});
