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
	site: "https://www.magicaladventuresbymonica.com/",
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
			apiVersion: "2024-08-20",
			useCdn: false,
			studioBasePath: "/studio",
			stega: {
				studioUrl: "/studio",
			},
		}),
		react(),
		AstroPWA({
			// includeAssets: ["favicon.svg"],
			// registerType: "autoUpdate",
			// devOptions: {
			// 	enabled: true,
			// },
			manifest: {
				name: "Magical Adventures by Monica",
				short_name: "Magical Adventures by Monica",
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
		}),
	],
	output: "hybrid",
	adapter: netlify(),
});
