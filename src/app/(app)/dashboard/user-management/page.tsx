"use client";

import UsersTableContainer from "@/features/user/container/users-table-container";
import { Button } from "@/shared/components/ui/button";
import { useSheetStore } from "@/shared/hooks/use-sheet";
import { PlusIcon } from "lucide-react";
import { Suspense } from "react";
import CreateUserForm from "../../../../features/user/components/create-user-form";

export default function Page() {
	const { openSheet } = useSheetStore();
	return (
		<section className="flex flex-col gap-4 h-screen">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold">User Management</h2>
				<Button
					onClick={() =>
						openSheet({
							children: <CreateUserForm />,
						})
					}
				>
					<PlusIcon /> Add Event Coordinator
				</Button>
			</div>
			<div className="flex flex-col gap-4">
				<Suspense>
					<UsersTableContainer />
				</Suspense>
			</div>
		</section>
	);
}
