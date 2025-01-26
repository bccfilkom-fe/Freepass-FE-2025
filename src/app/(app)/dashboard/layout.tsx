"use client";

import Header from "@/features/daashboard/components/header";
import HeaderSkeleton from "@/features/daashboard/components/header-skeleton";
import type { TabHref } from "@/features/daashboard/data/tabs";
import { useSessionQuery } from "@/shared/repository/session-manager/query";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname();
	const { data, isLoading } = useSessionQuery();

	if (isLoading) {
		return <HeaderSkeleton />;
	}

	if (!data || !data.role) {
		throw new Error("Session data is not available");
	}

	return (
		<section className="flex flex-col h-screen">
			<Suspense fallback={<HeaderSkeleton />}>
				<Header activeTab={pathname as TabHref} role={data?.role} />
			</Suspense>
			<div className="flex flex-col flex-1 overflow-y-auto p-4">{children}</div>
		</section>
	);
}
