"use server";

import { env } from "../../lib/env";
import { handleResponse } from "../../lib/response-handler";
import type { GlobalResponse } from "../../types/response";
import { getSession } from "../session-manager/action";

import type { GetUsersQuery, GetUsersResponse } from "./dto";

export async function getUsers({
	search,
	page,
	limit,
	role,
	sort_by,
	sort_order,
}: GetUsersQuery): Promise<GlobalResponse<GetUsersResponse>> {
	const url = new URL(`${env.API_URL}/users`);

	if (page) url.searchParams.append("page", page.toString());
	else url.searchParams.append("page", "1");

	if (limit) url.searchParams.append("limit", limit.toString());
	else url.searchParams.append("limit", "1");

	if (search) url.searchParams.append("search", search);
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
