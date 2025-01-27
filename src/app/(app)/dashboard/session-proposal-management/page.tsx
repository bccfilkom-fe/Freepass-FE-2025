"use client";

import { PlusIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ProposalsTableContainer from "../../../../features/sesion-proposal-management/container/proposals-table-container";

export default function Page() {
	const searchParams = useSearchParams();
	const status = searchParams.get("status");
	if (!status) {
		const router = useRouter();
		const pathname = usePathname();
		const urlSearchParams = new URLSearchParams(searchParams);
		urlSearchParams.set("status", "1"); // pending

		router.replace(`${pathname}?${urlSearchParams.toString()}`);
	}

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
