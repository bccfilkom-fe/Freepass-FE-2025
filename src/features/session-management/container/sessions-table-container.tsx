"use client";

import { toast } from "sonner";
import usePagination from "../../../shared/hooks/use-pagination";
import { useSessionsQuery } from "../../../shared/repository/session/query";
import SearchInput from "../components/search-input";
import SessionTable from "../components/session-table";

export default function SessionsTableContainer() {
	const { data, isLoading, error } = useSessionsQuery({ status: 2 });
	const pagination = usePagination();

	if (error) {
		toast.error("Failed to fetch sessions");
	}

	return (
		<div className="space-y-2">
			<SearchInput handleSearch={pagination.handleSearch} />
			{isLoading ? (
				<div>Loading...</div>
			) : data ? (
				<SessionTable
					data={data.payload.sessions}
					meta={data.payload.meta}
					paginationState={pagination.paginationState}
					handlePageChange={pagination.handlePageChange}
				/>
			) : (
				<div>No data</div>
			)}
		</div>
	);
}
