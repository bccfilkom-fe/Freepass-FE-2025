import usePagination from "../../../shared/hooks/use-pagination";
import { useGetSessionAttendeesQuery } from "../../../shared/repository/session/query";
import SearchAttendeeInput from "../components/search-attendee-input";
import SessionAttendeeTable from "../components/session-attendee-table";

type Prop = {
	id: string;
};

export default function SessionAttendeesTableContainer({ id }: Prop) {
	const { data, isLoading } = useGetSessionAttendeesQuery(id);
	const pagination = usePagination();

	if (isLoading || !data) {
		return <div>Loading...</div>;
	}

	return (
		<div className="space-y-2">
			<SearchAttendeeInput handleSearch={pagination.handleSearch} />
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
