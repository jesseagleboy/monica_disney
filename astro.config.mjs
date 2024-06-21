import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/static";
import partytown from "@astrojs/partytown";

import vercel from "@astrojs/vercel/static";

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
	],
	output: "static",
	adapter: vercel({
		// webAnalytics: {
		// 	enabled: true,
		// },
		maxDuration: 8,
	}),
});
