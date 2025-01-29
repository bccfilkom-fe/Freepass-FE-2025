import { useSessionsQuery } from "@/shared/repository/session/query";
import { toast } from "sonner";
import ProposalCard from "./session-card";

type Prop = {
	user_id: string;
};

export default function SessionList({ user_id }: Prop) {
	console.log(user_id);
	const { data, error, isLoading } = useSessionsQuery({ status: 2, user_id });

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
