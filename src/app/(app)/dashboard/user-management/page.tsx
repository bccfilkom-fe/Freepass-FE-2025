"use client";

import UsersTableContainer from "@/features/user/container/users-table-container";
import { Button } from "@/shared/components/ui/button";
import { PlusIcon } from "lucide-react";

export default function Page() {
	return (
		<section className="flex flex-col gap-4 h-screen">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold">User Management</h2>
				<Button onClick={() => {}}>
					<PlusIcon /> Add Event Coordinator
				</Button>
			</div>
			<div className="flex flex-col gap-4">
				<UsersTableContainer />
			</div>
		</section>
	);
}
