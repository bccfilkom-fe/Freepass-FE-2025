import { Suspense } from "react";
import SessionList from "../../../features/session/componenets/session-list";

export default function Page() {
	return (
		<main className=" h-full w-full flex flex-col gap-4 items-center py-20 lg:py-40">
			<h1 className="text-5xl md:text-7xl tracking-tighter text-center">
				Join a Session
			</h1>
			<Suspense>
				<SessionList />
			</Suspense>
		</main>
	);
}
