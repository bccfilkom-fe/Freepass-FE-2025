import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../../../shared/components/ui/card";
import { useDialogStore } from "../../../shared/hooks/use-dialog";
import {
	formatDates,
	timeDifference,
} from "../../../shared/lib/date-formatter";
import { SessionTagMap, SessionTypeMap } from "../../../shared/lib/map-data";
import type { SessionResponse } from "../../../shared/repository/session/dto";
import ReviewSessionDialog from "./review-session-dialog";

type Props = {
	session: SessionResponse;
};

export default function SessionCard({ session }: Props) {
	const { openDialog } = useDialogStore();

	return (
		<Card
			className="hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-md hover:cursor-pointer"
			onClick={() =>
				openDialog({
					children: <ReviewSessionDialog id={session.id} />,
				})
			}
		>
			<CardHeader>
				<CardTitle className="text-2xl">{session.title}</CardTitle>
				<CardDescription>{session.description}</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex flex-row justify-between">
					<div className="flex flex-col gap-2 text-muted-foreground">
						<span>Duration</span>
						<span>Time</span>
					</div>
					<div className="flex flex-col gap-2 text-end">
						<span>{timeDifference(session.start_at, session.end_at)}</span>
						<span>{formatDates(session.start_at, session.end_at)}</span>
					</div>
				</div>
			</CardContent>
			<CardFooter className="flex flex-wrap gap-2">
				<div className="px-4 py-2 rounded-lg border text-xs bg-secondary">
					<span>{SessionTypeMap[session.type]}</span>
				</div>
				<div className="border-r-2 h-8" />
				{session.tags.map((tag) => {
					return (
						<div key={tag} className="px-4 py-2 rounded-lg border text-xs">
							<span>{SessionTagMap[tag]}</span>
						</div>
					);
				})}
			</CardFooter>
		</Card>
	);
}
