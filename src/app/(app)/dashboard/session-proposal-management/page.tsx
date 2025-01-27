"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ProposalsTableContainer from "../../../../features/sesion-proposal-management/container/proposals-table-container";

export default function Page() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		// Always set status to 1
		const urlSearchParams = new URLSearchParams(searchParams);
		if (urlSearchParams.get("status") !== "1") {
			urlSearchParams.set("status", "1");
			router.replace(`${pathname}?${urlSearchParams.toString()}`);
		}
	}, [searchParams, pathname, router]);

	return (
		<section className="flex flex-col gap-4 h-screen">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold">Sesion Proposal Management</h2>
			</div>
			<div className="flex flex-col gap-4">
				<ProposalsTableContainer />
			</div>
		</section>
	);
}
