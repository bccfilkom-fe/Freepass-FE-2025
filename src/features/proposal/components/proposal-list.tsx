import { useSessionsQuery } from "@/shared/repository/session/query";
import { toast } from "sonner";
import ProposalCard from "./proposal-card";

export default function ProposalList() {
	const { data, error, isLoading } = useSessionsQuery();

	if (isLoading) {
		return <p>Loading sessions...</p>;
	}

	if (!data) {
		return <p>Failed to load sessions.</p>;
	}

	if (error) {
		toast.error(error.message);
	}

	const {
		payload: { sessions },
	} = data;

	return sessions.length > 0 ? (
		sessions.map((session) => (
			<ProposalCard key={session.id} session={session} />
		))
	) : (
		<p>No sessions found.</p>
	);
}
