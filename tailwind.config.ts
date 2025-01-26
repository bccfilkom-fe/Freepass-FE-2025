import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/features/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			sans: ["Inter"],
		},
		extend: {},
	},
	plugins: [],
} satisfies Config;
