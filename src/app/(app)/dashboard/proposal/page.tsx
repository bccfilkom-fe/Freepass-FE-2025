"use client";

import ProposalForm from "@/features/proposal/components/proposal-form";
import ProposalList from "@/features/proposal/components/proposal-list";
import { Button } from "@/shared/components/ui/button";
import { useSheetStore } from "@/shared/hooks/use-sheet";
import { PlusIcon } from "lucide-react";

export default function Page() {
	const { openSheet } = useSheetStore();

	return (
		<section className="flex flex-col gap-4 h-screen">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold">Session Proposal Management</h2>
				<Button onClick={() => openSheet({ children: <ProposalForm /> })}>
					<PlusIcon /> Propose Session
				</Button>
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				<ProposalList />
			</div>
		</section>
	);
}
