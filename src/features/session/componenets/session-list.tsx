"use client";

import { Checkbox } from "../../../shared/components/ui/checkbox";
import {
	DateField,
	DateInput,
} from "../../../shared/components/ui/datefield-rac";
import { Input } from "../../../shared/components/ui/input";
import { Label } from "../../../shared/components/ui/label";
import {
	RadioGroup,
	RadioGroupItem,
} from "../../../shared/components/ui/radio-group";
import { Skeleton } from "../../../shared/components/ui/skeleton";
import { SessionTagMap } from "../../../shared/lib/map-data";
import { useSessionsQuery } from "../../../shared/repository/session/query";
import SessionCard from "./session-card";

export default function SessionList() {
	const { isLoading, data } = useSessionsQuery({ status: 2 });

	if (isLoading || !data) {
		return (
			<div className="h-5/6 flex flex-col gap-4 w-5/6">
				<div className="col-span-4 row-span-5 overflow-y-auto gap-y-4 grid w-full">
					<Skeleton className="w-full h-40 border-2 rounded-lg flex-shrink-0" />
					<Skeleton className="w-full h-40 border-2 rounded-lg flex-shrink-0" />
					<Skeleton className="w-full h-40 border-2 rounded-lg flex-shrink-0" />
				</div>
			</div>
		);
	}

	return (
		<div className="h-5/6 flex flex-col gap-4 w-5/6">
			<div className="col-span-4 row-span-5 overflow-y-auto gap-y-4 grid w-full">
				{data.payload.sessions.length > 0 ? (
					data.payload.sessions.map((session) => {
						return <SessionCard key={session.id} session={session} />;
					})
				) : (
					<p>
						There are no sessions available at the moment. Please check back
						later or propose your own session!
					</p>
				)}
			</div>
		</div>
	);
}
