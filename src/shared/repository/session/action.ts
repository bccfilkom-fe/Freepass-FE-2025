"use server";

import { env } from "../../lib/env";
import { handleResponse } from "../../lib/response-handler";
import type { GlobalResponse } from "../../types/response";
import { getSession } from "../session-manager/action";
import type {
	AcceptSessionRequest,
	EditSessionRequest,
	GetSessionResponse,
	GetSessionsQuery,
	GetSessionsResponse,
	RejectSessionRequest,
} from "./dto";

export async function getSessions({
	search,
	page,
	limit,
	type,
	tags,
	sort_by,
	sort_order,
	before_at,
	after_at,
	status,
}: GetSessionsQuery): Promise<GlobalResponse<GetSessionsResponse>> {
	const url = new URL(`${env.API_URL}/sessions/public`);

	if (page) url.searchParams.append("page", page.toString());
	else url.searchParams.append("page", "1");

	if (limit) url.searchParams.append("limit", limit.toString());
	else url.searchParams.append("limit", "10");

	if (search) url.searchParams.append("search", search);
	if (type) url.searchParams.append("type", type.toString());
	if (tags) url.searchParams.append("tags", tags.join(","));
	if (sort_by) url.searchParams.append("sort_by", sort_by);
	if (sort_order) url.searchParams.append("sort_order", sort_order);
	if (before_at) url.searchParams.append("before_at", before_at);
	if (after_at) url.searchParams.append("after_at", after_at);
	if (status) url.searchParams.append("status", status.toString());

	const res = await fetch(url.toString(), {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"x-api-key": env.API_KEY,
		},
	});

	return handleResponse<GetSessionsResponse>("Get sessions", res);
}

export async function getMySessions({
	search,
	page,
	limit,
	type,
	tags,
	sort_by,
	sort_order,
	before_at,
	after_at,
}: GetSessionsQuery): Promise<GlobalResponse<GetSessionsResponse>> {
	const url = new URL(`${env.API_URL}/sessions`);

	if (page) url.searchParams.append("page", page.toString());
	else url.searchParams.append("page", "1");

	if (limit) url.searchParams.append("limit", limit.toString());
	else url.searchParams.append("limit", "10");

	if (search) url.searchParams.append("search", search);
	if (type) url.searchParams.append("type", type.toString());
	if (tags) url.searchParams.append("tags", tags.join(","));
	if (sort_by) url.searchParams.append("sort_by", sort_by);
	if (sort_order) url.searchParams.append("sort_order", sort_order);
	if (before_at) url.searchParams.append("before_at", before_at);
	if (after_at) url.searchParams.append("after_at", after_at);

	const session = await getSession();

	const res = await fetch(url.toString(), {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"x-api-key": env.API_KEY,
			Authorization: `Bearer ${session.token}`,
		},
	});

	return handleResponse<GetSessionsResponse>("Get sessions", res);
}

export async function getSessionEvent(
	sessionId: string,
): Promise<GlobalResponse<GetSessionResponse>> {
	const url = new URL(`${env.API_URL}/sessions/${sessionId}`);

	const session = await getSession();

	const res = await fetch(url.toString(), {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"x-api-key": env.API_KEY,
			Authorization: `Bearer ${session.token}`,
		},
	});

	return handleResponse<GetSessionResponse>("Get session", res);
}

export async function createSession(
	data: EditSessionRequest,
): Promise<GlobalResponse<null>> {
	const url = new URL(`${env.API_URL}/sessions`);

	const session = await getSession();

	const res = await fetch(url.toString(), {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"x-api-key": env.API_KEY,
			Authorization: `Bearer ${session.token}`,
		},
		body: JSON.stringify(data),
	});

	return handleResponse<null>("Create session", res);
}

export async function editSession(
	data: EditSessionRequest,
	sessionId: string,
): Promise<GlobalResponse<null>> {
	const url = new URL(`${env.API_URL}/sessions/${sessionId}`);

	const session = await getSession();

	const res = await fetch(url.toString(), {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			"x-api-key": env.API_KEY,
			Authorization: `Bearer ${session.token}`,
		},
		body: JSON.stringify(data),
	});

	return handleResponse<null>("Update session", res);
}

export async function acceptSessionProposal(
	req: AcceptSessionRequest,
	id: string,
): Promise<GlobalResponse<null>> {
	const url = new URL(`${env.API_URL}/sessions/${id}/accept`);

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

	return handleResponse<null>("Accept session proposal", res);
}

export async function rejectSessionProposal(
	req: RejectSessionRequest,
	id: string,
): Promise<GlobalResponse<null>> {
	const url = new URL(`${env.API_URL}/sessions/${id}/reject`);

	console.log("rejectSessionProposal", req, id);

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

	return handleResponse<null>("Reject session proposal", res);
}
