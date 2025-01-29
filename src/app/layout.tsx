import Provider from "@/shared/components/providers";
import { fontsVariables } from "@/shared/lib/fonts";
import "@/shared/styles/globals.css";

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
