"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { TrashIcon } from "lucide-react";
import { Button } from "../../../shared/components/ui/button";
import { useDeleteReviewMutation } from "../../../shared/repository/session/query";
import type { UserResponse } from "../../../shared/repository/user/dto";

export type SessionAttendeeColumns = {
	session_id: string;
	user_id: string;
	review?: string;
	user: UserResponse;
};

export const sessionAttendeeColumns: ColumnDef<SessionAttendeeColumns>[] = [
	{
		header: "Name",
		accessorKey: "name",
		cell(props) {
			const { user } = props.row.original;

			return <span>{user.name}</span>;
		},
	},
	{
		header: "Review",
		accessorKey: "review",
		cell(props) {
			const review =
				props.row.getValue<SessionAttendeeColumns["review"]>("review");

			return <span>{review || "Have not giving feedback"}</span>;
		},
	},
	{
		header: "Action",
		cell: (props) => {
			const { session_id, user_id } = props.row.original;
			const { mutate: deleteReviewSession } = useDeleteReviewMutation(
				session_id,
				user_id,
			);

			return (
				<Button
					variant="destructive"
					size="icon"
					onClick={() => deleteReviewSession()}
				>
					<TrashIcon />
				</Button>
			);
		},
	},
];
