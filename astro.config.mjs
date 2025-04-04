import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import AstroPWA from "@vite-pwa/astro";
import tunnel from "astro-tunnel";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://www.magicaladventuresbymonica.com/",

	server: {
		port: 3000,
	},

	experimental: {
		responsiveImages: true,
		svg: true,
	},

	image: {
		experimentalLayout: "responsive",
	},

	integrations: [
		mdx(),
		sitemap({
			lastmod: new Date(),
			xslURL: '/sitemap.xsl',
		}),
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
		AstroPWA({
			includeAssets: ["favicon.svg"],
			registerType: "autoUpdate",
			devOptions: {
				enabled: true,
			},
			workbox: {
				navigateFallback: "/404",
				globPatterns: ["**/*.{css,js,json,png,svg,webp,html,astro,jpeg}"],
				maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
			},
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
			pwaAssets: {
				config: true,
			},
		}),
		tunnel(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
