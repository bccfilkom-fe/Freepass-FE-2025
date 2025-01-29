import { Suspense } from "react";
import SessionsTableContainer from "../../../../features/session-management/container/sessions-table-container";

export default function Page() {
	return (
		<section className="flex flex-col gap-4 h-screen">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold">Sesion Management</h2>
			</div>
			<div className="flex flex-col gap-4">
				<Suspense>
					<SessionsTableContainer />
				</Suspense>
			</div>
		</section>
	);
}
