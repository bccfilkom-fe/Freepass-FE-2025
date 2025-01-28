"use client";

import { toast } from "sonner";
import SearchInput from "../../../shared/components/search-input";
import usePagination from "../../../shared/hooks/use-pagination";
import { useSessionsQuery } from "../../../shared/repository/session/query";
import ProposalTable from "../components/proposal-table";

export default function ProposalsTableContainer() {
	const { data, isLoading, error } = useSessionsQuery({ status: 1 });
	const pagination = usePagination();

	if (error) {
		toast.error("Failed to fetch sesion proposals");
	}

	return (
		<div className="space-y-2">
			<SearchInput
				handleSearch={pagination.handleSearch}
				value={pagination.paginationState.search}
				placeholder="Search session proposals..."
			/>
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
