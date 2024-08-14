import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import netlify from "@astrojs/netlify";
import AstroPWA from "@vite-pwa/astro";

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
			includeAssets: ["favicon.svg"],
			registerType: "autoUpdate",
			workbox: { navigateFallback: "/404", globPatterns: ["**/*.{css,js,html,svg,png,ico,txt}"] },
			devOptions: {
				enabled: true,
				navigateFallbackAllowlist: [/^\//],
			},
			manifest: {
				name: "Magical Adventures by Monica",
				short_name: "Monica Magic Adventures",
				description: "Monica DeFosse - Once Upon A Wish Travel",
				theme_color: "#ffffff",
				icons: [
					{
						src: "pwa-64x64.png",
						sizes: "64x64",
						type: "image/png",
					},
					{
						src: "pwa-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "pwa-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "any",
					},
					{
						src: "maskable-icon-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "maskable",
					},
				],
			},
			experimental: {
				directoryAndTrailingSlashHandler: true,
			},
		}),
	],
	output: "hybrid",
	adapter: netlify(),
});
