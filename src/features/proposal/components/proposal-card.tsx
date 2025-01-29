import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";
import { useSheetStore } from "@/shared/hooks/use-sheet";
import { formatDates, timeDifference } from "@/shared/lib/date-formatter";
import {
	SessionStatusMap,
	SessionTagMap,
	SessionTypeMap,
} from "@/shared/lib/map-data";
import { cn } from "@/shared/lib/utils";
import type { SessionResponse } from "@/shared/repository/session/dto";
import EditProposalForm from "./edit-proposal-form";

type Props = {
	session: SessionResponse;
};

export default function ProposalCard({ session }: Props) {
	const { openSheet } = useSheetStore();

	return (
		<Card
			className="hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-md hover:cursor-pointer"
			onClick={() =>
				openSheet({
					children: <EditProposalForm id={session.id} />,
				})
			}
		>
			<CardHeader>
				<div className="flex flex-row justify-between">
					<CardTitle className="text-2xl">{session.title}</CardTitle>
					<div
						className={cn(
							"px-4 py-2 rounded-lg border text-xs",
							session.status === 1
								? "bg-muted"
								: session.status === 2
									? "bg-green-300"
									: "bg-red-300",
						)}
					>
						{SessionStatusMap[session.status]}
					</div>
				</div>
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
