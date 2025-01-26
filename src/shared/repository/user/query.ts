import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { getUsers } from "./action";
import type { GetUsersQuery } from "./dto";

export const useUsersQuery = () => {
	const searchParams = useSearchParams();

	console.log(searchParams, "[searchParams]");

	const search = searchParams.get("search");
	const page = Number(searchParams.get("page"));
	const limit = Number(searchParams.get("limit"));
	const role = searchParams.get("role") as GetUsersQuery["role"];
	const sort_by = searchParams.get("sort_by") as GetUsersQuery["sort_by"];
	const sort_order = searchParams.get(
		"sort_order",
	) as GetUsersQuery["sort_order"];

	return useQuery({
		queryKey: ["users", page, limit, search],
		queryFn: () =>
			getUsers({
				search,
				page,
				limit,
				role,
				sort_by,
				sort_order,
			}),
	});
};
