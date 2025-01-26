"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";
import { RoleMap } from "../../../shared/lib/map-data";

export type UserColumns = {
	id: string;
	name: string;
	email: string;
	role: keyof typeof RoleMap;
	image_uri?: string;
};

export const userColumns: ColumnDef<UserColumns>[] = [
	{
		header: "ID",
		accessorKey: "id",
		cell(props) {
			const id = props.row.getValue<UserColumns["id"]>("id");
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
		header: "Name",
		accessorKey: "name",
	},
	{
		header: "Email",
		accessorKey: "email",
	},
	{
		header: "Role",
		accessorKey: "role",
		cell(props) {
			const role = props.row.getValue<UserColumns["role"]>("role");
			return (
				<div className="px-2 py-1 rounded-lg border text-xs bg-secondary w-min">
					<span>{RoleMap[role]}</span>
				</div>
			);
		},
	},
];
