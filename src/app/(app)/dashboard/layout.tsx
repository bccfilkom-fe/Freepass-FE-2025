"use client";

import Header from "@/features/dashboard/components/header";
import HeaderSkeleton from "@/features/dashboard/components/header-skeleton";
import type { TabHref } from "@/features/dashboard/data/tabs";
import { useSessionQuery } from "@/shared/repository/session-manager/query";
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
			<Header activeTab={pathname as TabHref} />
			<div className="flex flex-col flex-1 overflow-y-auto p-4">{children}</div>
		</section>
	);
}
