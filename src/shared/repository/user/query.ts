import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { useSheetStore } from "../../hooks/use-sheet";
import { createUser, deleteUser, getUsers } from "./action";
import type { CreateUserRequest, GetUsersQuery } from "./dto";

export const useUsersQuery = () => {
	const searchParams = useSearchParams();

	const search = searchParams.get("search") || "";
	const page = Number(searchParams.get("page")) || 1;
	const limit = Number(searchParams.get("limit")) || 10;
	const role =
		(Number(searchParams.get("role")) as GetUsersQuery["role"]) || undefined;
	const sort_by =
		(searchParams.get("sort_by") as GetUsersQuery["sort_by"]) || undefined;
	const sort_order =
		(searchParams.get("sort_order") as GetUsersQuery["sort_order"]) ||
		undefined;

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

export const useCreateUserMutation = () => {
	const queryClient = useQueryClient();
	const { closeSheet } = useSheetStore();

	return useMutation({
		mutationFn: (req: CreateUserRequest) => createUser(req),
		onSuccess: (data) => {
			toast.success(data.message);
			closeSheet();
			queryClient.invalidateQueries({
				queryKey: ["users"],
			});
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});
};

export const useDeleteUserMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (userId: string) => deleteUser({ userId }),
		onSuccess: (data) => {
			toast.success(data.message);
			queryClient.invalidateQueries({
				queryKey: ["users"],
			});
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});
};
