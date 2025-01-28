import { Armchair, ClockIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import { formatDates } from "../../../shared/lib/date-formatter";
import { SessionTagMap, SessionTypeMap } from "../../../shared/lib/map-data";
import type { SessionResponse } from "../../../shared/repository/session/dto";

type Prop = {
	session: SessionResponse;
};

export default function SessionCard({ session }: Prop) {
	return (
		<div className="w-full h-min border-2 rounded-lg flex-shrink-0 flex flex-col gap-2 p-4">
			<div className="flex flex-row justify-between items-center">
				<h3 className="text-xl font-semibold">
					{session.title}{" "}
					<span className="text-xs bg-muted font-light">
						(Proposed by{" "}
						<Link href="/" className="underline-offset-4 hover:underline">
							{session.proposer.name}
						</Link>
						)
					</span>
				</h3>
			</div>
			<p className="w-full text-wrap text-xs text-muted-foreground">
				{session.description}
			</p>
			<div className="flex justify-between items-center">
				<div className="flex flex-wrap gap-2">
					<div className="flex flex-row gap-2 items-center">
						<MapPinIcon className="w-4 h-4" />
						<span className="text-sm">
							{session.meeting_url ? "Online" : "Offline"}
						</span>
					</div>
					<div className="flex row gap-2 items-center">
						<ClockIcon className="w-4 h-4" />
						<span className="text-sm">
							{formatDates(session.start_at, session.end_at)}
						</span>
					</div>
					<div className="flex row gap-2 items-center">
						<Armchair className="w-4 h-4" />
						<span className="text-sm">
							<span className="font-semibold">{session.capacity}</span> Slot
						</span>
					</div>
				</div>
				<div className="flex flex-wrap gap-2">
					<div className="px-4 py-2 rounded-lg border text-xs bg-secondary">
						<span>{SessionTypeMap[session.type]}</span>
					</div>
					<div className="border-r-2 h-8" />
					{session.tags.map((tag) => (
						<div key={tag} className="px-4 py-2 rounded-lg border text-xs">
							<span>{SessionTagMap[tag]}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
