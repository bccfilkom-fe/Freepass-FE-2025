"use client";

import SearchInput from "@/shared/components/search-input";
import usePagination from "@/shared/hooks/use-pagination";
import { useSessionsQuery } from "@/shared/repository/session/query";
import { toast } from "sonner";
import SessionTable from "../components/session-table";

export default function SessionsTableContainer() {
	const { data, isLoading, error } = useSessionsQuery({ status: 2 });
	const pagination = usePagination();

	if (error) {
		toast.error("Failed to fetch sessions");
	}

	return (
		<div className="space-y-2">
			<SearchInput
				handleSearch={pagination.handleSearch}
				value={pagination.paginationState.search}
				placeholder="Search sessions..."
			/>
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
