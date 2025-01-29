import SearchInput from "@/shared/components/search-input";
import usePagination from "@/shared/hooks/use-pagination";
import { useGetSessionAttendeesQuery } from "@/shared/repository/session/query";
import SessionAttendeeTable from "../components/session-attendee-table";

type Prop = {
	id: string;
};

export default function SessionAttendeesTableContainer({ id }: Prop) {
	const pagination = usePagination();
	const { data, isLoading } = useGetSessionAttendeesQuery(id);

	if (isLoading || !data) {
		return <div>Loading...</div>;
	}

	return (
		<div className="space-y-2">
			<SearchInput
				handleSearch={pagination.handleSearch}
				value={pagination.paginationState.search}
				placeholder="Search session attendees..."
			/>
			{isLoading ? (
				<div>Loading...</div>
			) : data ? (
				<SessionAttendeeTable
					data={data.payload.session_attendees}
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
