import { useGetSessionQuery } from "../../../shared/repository/session/query";
import SessionCard from "../components/session-card";

type Prop = {
	id: string;
};

export default function SessionCardContainer({ id }: Prop) {
	const { data, isLoading } = useGetSessionQuery(id);

	if (isLoading || !data) {
		return <div>Loading...</div>;
	}

	return <SessionCard session={data.payload.session} />;
}
