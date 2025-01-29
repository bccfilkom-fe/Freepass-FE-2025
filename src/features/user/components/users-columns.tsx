"use client";

import { Button } from "@/shared/components/ui/button";
import { useAlertDialogStore } from "@/shared/hooks/use-alert-dialog";
import { RoleMap } from "@/shared/lib/map-data";
import { useDeleteUserMutation } from "@/shared/repository/user/query";
import type { ColumnDef } from "@tanstack/react-table";
import { EyeIcon, Loader2Icon, Trash2Icon } from "lucide-react";
import { toast } from "sonner";
import DeleteUserAlert from "./delete-user-alert";

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
	{
		header: "Action",
		cell(props) {
			const { mutate: deleteUser, isPending } = useDeleteUserMutation();
			const { openAlertDialog } = useAlertDialogStore();

			const id = props.row.getValue<UserColumns["id"]>("id");

			return (
				<div className="flex gap-2">
					{/* ! TODO: go to /profile/{id} */}
					<Button
						size="icon"
						variant="outline"
						onClick={() => {}}
						disabled={isPending}
					>
						<EyeIcon />
					</Button>
					<Button
						size="icon"
						variant="destructive"
						onClick={() =>
							openAlertDialog({
								children: <DeleteUserAlert onAction={() => deleteUser(id)} />,
							})
						}
						disabled={isPending}
					>
						{isPending ? (
							<Loader2Icon className="animate-spin" />
						) : (
							<Trash2Icon />
						)}
					</Button>
				</div>
			);
		},
	},
];
