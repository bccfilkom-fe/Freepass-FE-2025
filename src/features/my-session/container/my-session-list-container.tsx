"use client";

import { useSessionQuery } from "../../../shared/repository/auth/query";
import SessionList from "../components/session-list";

export default function MySessionContainer() {
	const { data, isLoading } = useSessionQuery();

	if (isLoading || !data) {
		return <p>Loading sessions...</p>;
	}

	return <SessionList user_id={data.payload.user.id} />;
}
