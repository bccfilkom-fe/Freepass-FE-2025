import { fontsVariables } from "@/shared/lib/fonts";
import "@/shared/styles/globals.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${fontsVariables} antialiased`}>{children}</body>
		</html>
	);
}
