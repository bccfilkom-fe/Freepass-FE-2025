import SearchInput from "@/shared/components/search-input";
import usePagination from "@/shared/hooks/use-pagination";
import { useUsersQuery } from "@/shared/repository/user/query";
import { toast } from "sonner";
import UsersTable from "../components/users-table";

export default function UsersTableContainer() {
	const { data, isLoading, error } = useUsersQuery();
	const pagination = usePagination();

	if (error) {
		toast.error("Failed to fetch users");
	}

	return (
		<div className="space-y-2">
			<SearchInput
				handleSearch={pagination.handleSearch}
				value={pagination.paginationState.search}
				placeholder="Search users..."
			/>
			{isLoading ? (
				<div>Loading...</div>
			) : data ? (
				<UsersTable
					data={data.payload.users}
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
