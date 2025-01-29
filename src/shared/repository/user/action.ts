"use server";

import { env } from "@/shared/lib/env";
import { handleResponse } from "@/shared/lib/response-handler";
import type { GlobalResponse } from "@/shared/types/response";
import { getSession } from "../session-manager/action";

import type {
	CreateUserRequest,
	DeleteUserQuery,
	GetUsersQuery,
	GetUsersResponse,
} from "./dto";

export async function getUsers({
	search,
	page,
	limit,
	role,
	sort_by,
	sort_order,
}: GetUsersQuery): Promise<GlobalResponse<GetUsersResponse>> {
	const url = new URL(`${env.API_URL}/users`);

	url.searchParams.append("page", page.toString());
	url.searchParams.append("limit", limit.toString());
	url.searchParams.append("search", search);
	if (role) url.searchParams.append("role", role.toString());
	if (sort_by) url.searchParams.append("sort_by", sort_by);
	if (sort_order) url.searchParams.append("sort_order", sort_order);

	const session = await getSession();

	const res = await fetch(url.toString(), {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"x-api-key": env.API_KEY,
			Authorization: `Bearer ${session.token}`,
		},
	});

	return handleResponse<GetUsersResponse>("Get users", res);
}

export async function createUser(
	req: CreateUserRequest,
): Promise<GlobalResponse<null>> {
	const url = new URL(`${env.API_URL}/users`);

	const session = await getSession();

	const res = await fetch(url.toString(), {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"x-api-key": env.API_KEY,
			Authorization: `Bearer ${session.token}`,
		},
		body: JSON.stringify(req),
	});

	return handleResponse<null>("Create user", res);
}

export async function deleteUser({
	userId,
}: DeleteUserQuery): Promise<GlobalResponse<null>> {
	const url = new URL(`${env.API_URL}/users/${userId}`);

	const session = await getSession();

	const res = await fetch(url.toString(), {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			"x-api-key": env.API_KEY,
			Authorization: `Bearer ${session.token}`,
		},
	});

	return handleResponse<null>("Delete user", res);
}
