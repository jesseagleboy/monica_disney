import themeArray from '@/functions/themeArray'
import fluid, { extract } from 'fluid-tailwind'

/** @type {import('tailwindcss').Config} */
export default {
	content: {
		files: [ "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}" ],
		extract,
	},
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries"), require("daisyui"), fluid],

	// daisyUI config (optional - here are the default values)
	daisyui: {
		themes: themeArray,
	},
};
