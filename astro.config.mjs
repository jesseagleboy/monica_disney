import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
// import vercel from "@astrojs/vercel/serverless";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";

import netlify from "@astrojs/netlify";

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
				debug: true,
			},
		}),
		sanity({
			projectId: "gwwfkmev",
			dataset: "production",
			apiVersion: "2024-08-05",
			useCdn: false,
			studioBasePath: "/studio",
			stega: {
				studioUrl: "/studio",
			},
		}),
		react(),
	],
	output: "hybrid",
	adapter: netlify(),
});
