import { ClockIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import { formatDates } from "../../../shared/lib/date-formatter";
import { SessionTagMap, SessionTypeMap } from "../../../shared/lib/map-data";
import type { SessionResponse } from "../../../shared/repository/session/dto";

type Prop = {
	session: SessionResponse;
};

export default function SessionCard({ session }: Prop) {
	return (
		<div className="w-full h-min border-2 rounded-lg flex-shrink-0 flex flex-col gap-2 p-4 hover:bg-muted transition-all duration-300 ease-in-out hover:cursor-pointer">
			<div className="flex flex-row justify-between items-center">
				<h3 className="text-xl font-semibold">
					Title{" "}
					<span className="text-xs bg-muted font-light">
						(Proposed by{" "}
						<Link href="/" className="underline-offset-4 hover:underline">
							name
						</Link>
						)
					</span>
				</h3>
				<div className="px-4 py-2 rounded-lg border text-xs bg-green-600 text-white">
					<span>Joined</span>
				</div>
			</div>
			<p className="w-full text-wrap text-xs text-muted-foreground">
				that provides an overview of the session. This session will cover
				various topics and provide valuable insights. Join us to learn more and
				enhance your knowledge. Don't miss out on this opportunity to grow and
				connect with others in the field.
			</p>
			<div className="flex justify-between items-center">
				<div className="flex flex-wrap gap-2">
					<div className="flex flex-row gap-2 items-center">
						<MapPinIcon className="w-4 h-4" />
						<span className="text-sm">Offline</span>
					</div>
					<div className="flex row gap-2 items-center">
						<ClockIcon className="w-4 h-4" />
						<span className="text-sm">
							{formatDates(new Date().toISOString(), new Date().toISOString())}
						</span>
					</div>
				</div>
				<div className="flex flex-wrap gap-2">
					<div className="px-4 py-2 rounded-lg border text-xs bg-secondary">
						<span>{SessionTypeMap[1]}</span>
					</div>
					<div className="border-r-2 h-8" />
					<div className="px-4 py-2 rounded-lg border text-xs">
						<span>{SessionTagMap.BE}</span>
					</div>
					<div className="px-4 py-2 rounded-lg border text-xs">
						<span>{SessionTagMap.PM}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
