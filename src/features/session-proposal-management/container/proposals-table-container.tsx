"use client";

import { toast } from "sonner";
import usePagination from "../../../shared/hooks/use-pagination";
import { useSessionsQuery } from "../../../shared/repository/session/query";
import ProposalTable from "../components/proposal-table";
import SearchInput from "../components/search-input";

export default function ProposalsTableContainer() {
	const { data, isLoading, error } = useSessionsQuery();
	const pagination = usePagination();

	if (error) {
		toast.error("Failed to fetch sesion proposals");
	}

	console.log(data?.payload.sessions);

	return (
		<div className="space-y-2">
			<SearchInput handleSearch={pagination.handleSearch} />
			{isLoading ? (
				<div>Loading...</div>
			) : data ? (
				<ProposalTable
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
