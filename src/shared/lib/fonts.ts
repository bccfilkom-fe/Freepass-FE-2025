import { Inter } from "next/font/google";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin-ext"],
});

export const fontsVariables = `${inter.variable}`;
