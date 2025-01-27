import { z } from "zod";
import type { RoleMap } from "../../lib/map-data";
import type { PaginationResponse } from "../../types/response";

export type UserResponse = {
	id: string;
	name: string;
	email: string;
	role: keyof typeof RoleMap;
	image_uri?: string;
};

export type GetUsersQuery = {
	role: keyof typeof RoleMap | null;
	search: string | null;
	page: number | null;
	limit: number | null;
	sort_by:
		| "id"
		| "name"
		| "email"
		| "role"
		| "created_at"
		| "updated_at"
		| null;
	sort_order: "asc" | "desc" | null;
};

export type GetUsersResponse = {
	users: UserResponse[];
	meta: PaginationResponse;
};

export type GetUserResponse = {
	user: UserResponse;
};

export const CreateUserSchema = z.object({
	name: z.string().min(3),
	email: z.string().email(),
	password: z.string().min(8),
});

export type CreateUserRequest = z.infer<typeof CreateUserSchema>;

export type DeleteUserQuery = {
	userId: string;
};
