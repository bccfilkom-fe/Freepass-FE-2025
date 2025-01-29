import Provider from "@/shared/components/providers";
import { fontsVariables } from "@/shared/lib/fonts";
import "@/shared/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "BCC Conference",
	description: "BCC Conference, part of Freepass challenge by BCC FILKOM UB",
	metadataBase: new URL("https://freepass-fe-bcc-2025.ahargunyllib.tech"),
	icons: "/icon.png",
	openGraph: {
		title: "BCC Conference",
		description: "BCC Conference, part of Freepass challenge by BCC FILKOM UB",
	},
	twitter: {
		title: "BCC Conference",
		description: "BCC Conference, part of Freepass challenge by BCC FILKOM UB",
		card: "summary_large_image",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${fontsVariables} antialiased`}>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
