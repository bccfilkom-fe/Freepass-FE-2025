import { Suspense } from "react";
import Header from "../../features/landing/components/header";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<section className="flex flex-col h-screen">
			<Suspense>
				<Header />
			</Suspense>
			<div className="flex flex-col container mx-auto px-4">{children}</div>
		</section>
	);
}
