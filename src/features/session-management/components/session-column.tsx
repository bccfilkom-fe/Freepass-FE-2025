"use client";

import { Button } from "@/shared/components/ui/button";
import { formatDates } from "@/shared/lib/date-formatter";
import type { ColumnDef } from "@tanstack/react-table";
import { EyeIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

export type SessionColumns = {
	id: string;
	title: string;
	start_at: string;
	end_at: string;
	capacity: number;
};

export const sessionColumns: ColumnDef<SessionColumns>[] = [
	{
		header: "ID",
		accessorKey: "id",
		cell(props) {
			const id = props.row.getValue<SessionColumns["id"]>("id");
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
		header: "Time",
		cell(props) {
			const { start_at, end_at } = props.row.original;
			return <span>{formatDates(start_at, end_at)}</span>;
		},
	},
	{
		header: "capacity",
		accessorKey: "capacity",
	},
	{
		header: "Action",
		cell(props) {
			const id = props.row.getValue<SessionColumns["id"]>("id");
			const pathname = usePathname();
			const router = useRouter();
			return (
				<Button
					size="icon"
					variant="outline"
					onClick={() => {
						router.push(`${pathname}/${id}`);
					}}
				>
					<EyeIcon />
				</Button>
			);
		},
	},
];
