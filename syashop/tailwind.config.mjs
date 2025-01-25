/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#43C3D1",
        secondary: "#2884FF",
        tertiary: "#061123",
        accent: "#39EEEE",
      },
      fontFamily: {
        gilroy: ["var(--font-gilroy)"],
      },
    },
  },
  plugins: [],
};
