"use client";

import { type SessionTagMap, SessionTypeMap } from "@/shared/lib/map-data";
import type { UserResponse } from "@/shared/repository/user/dto";
import type { ColumnDef } from "@tanstack/react-table";
import { EyeIcon } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../../../shared/components/ui/button";
import { useSheetStore } from "../../../shared/hooks/use-sheet";
import ReviewProposalFormContainer from "../container/review-proposal-form-container";

export type ProposalSessionColumns = {
	id: string;
	title: string;
	proposer: UserResponse;
	type: keyof typeof SessionTypeMap;
	tags: (keyof typeof SessionTagMap)[];
	meeting_url?: string;
};

export const proposalColumns: ColumnDef<ProposalSessionColumns>[] = [
	{
		header: "ID",
		accessorKey: "id",
		cell(props) {
			const id = props.row.getValue<ProposalSessionColumns["id"]>("id");
			return (
				<span
					className="hover:cursor-pointer"
					onClick={async () => {
						try {
							await navigator.clipboard.writeText(id);
							toast.success("ID copied to clipboard");
						} catch (error) {
							toast.error("Failed to copy ID to clipboard");
						}
					}}
					onKeyDown={() => {}}
				>
					{id}
				</span>
			);
		},
	},
	{
		header: "Title",
		accessorKey: "title",
	},
	{
		header: "Proposer",
		accessorKey: "proposer",
		cell(props) {
			const proposer =
				props.row.getValue<ProposalSessionColumns["proposer"]>("proposer");
			return <span>{proposer.name}</span>;
		},
	},
	{
		header: "Type",
		accessorKey: "type",
		cell(props) {
			const type = props.row.getValue<ProposalSessionColumns["type"]>("type");
			return <span>{SessionTypeMap[type]}</span>;
		},
	},
	{
		header: "Tags",
		accessorKey: "tags",
		cell(props) {
			const tags = props.row.getValue<ProposalSessionColumns["tags"]>("tags");
			return (
				<div className="flex flex-row gap-2">
					{tags.map((tag) => (
						<div
							key={tag}
							className="px-2 py-1 rounded-lg border text-xs w-min"
						>
							<span>{tag}</span>
						</div>
					))}
				</div>
			);
		},
	},
	{
		header: "Offline",
		accessorKey: "meeting_url",
		cell(props) {
			const isOffline =
				props.row.getValue<ProposalSessionColumns["meeting_url"]>(
					"meeting_url",
				);
			return <span>{isOffline ? "Yes" : "No"}</span>;
		},
	},
	{
		header: "Action",
		cell(props) {
			const id = props.row.getValue<ProposalSessionColumns["id"]>("id");
			const { openSheet } = useSheetStore();
			return (
				<Button
					size="icon"
					variant="outline"
					onClick={() =>
						openSheet({ children: <ReviewProposalFormContainer id={id} /> })
					}
				>
					<EyeIcon />
				</Button>
			);
		},
	},
];
