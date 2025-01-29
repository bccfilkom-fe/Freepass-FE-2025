"use client";

import Header from "@/features/dashboard/components/header";
import type { TabHref } from "@/features/dashboard/data/tabs";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname();

	return (
		<section className="flex flex-col h-screen">
			<Suspense>
				<Header activeTab={pathname as TabHref} />
			</Suspense>
			<div className="flex flex-col flex-1 overflow-y-auto p-4">{children}</div>
		</section>
	);
}
