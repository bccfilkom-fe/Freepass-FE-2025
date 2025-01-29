"use client";

import { Suspense, use } from "react";
import SessionAttendeesTableContainer from "../../../../../features/session-management/container/session-attendees-table-container";
import SessionCardContainer from "../../../../../features/session-management/container/session-card-container";

export default function Page({
	params: _params,
}: {
	params: Promise<{ id: string }>;
}) {
	const params = use(_params);

	return (
		<section className="flex flex-col gap-4 h-screen">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold">Sesion Management</h2>
			</div>
			<div className="flex flex-col gap-4">
				<Suspense>
					<SessionCardContainer id={params.id} />
					<SessionAttendeesTableContainer id={params.id} />
				</Suspense>
			</div>
		</section>
	);
}
