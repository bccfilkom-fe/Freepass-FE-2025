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

export async function getSessions(
	query: GetSessionsQuery,
): Promise<GlobalResponse<GetSessionsResponse>> {
	const url = new URL(`${env.API_URL}/sessions`);

	for (const [key, value] of Object.entries(query)) {
		if (value !== undefined && value !== "") {
			if (Array.isArray(value)) {
				url.searchParams.append(key, value.join(","));
			} else {
				url.searchParams.append(key, value.toString());
			}
		}
	}

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
