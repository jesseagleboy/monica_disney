import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import netlify from "@astrojs/netlify";
import AstroPWA from '@vite-pwa/astro'

// https://astro.build/config
export default defineConfig({
	site: "https://magicaladventuresbymonica.com/",
	server: {
		open: true,
	},
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
		AstroPWA({
			registerType: "autoUpdate",
			workbox: { navigateFallback: '/404' },
			devOptions: {
				enabled: true,
			},
			manifest: {
				theme_color: "#ffffff",
			}
		}),
	],
	output: "hybrid",
	adapter: netlify(),
});
