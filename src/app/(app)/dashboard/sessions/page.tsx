import { Suspense } from "react";
import MySessionContainer from "../../../../features/my-session/container/my-session-list-container";

export default function Page() {
	return (
		<section className="flex flex-col gap-4 h-screen">
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-bold">Session</h2>
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				<Suspense>
					<MySessionContainer />
				</Suspense>
			</div>
		</section>
	);
}
