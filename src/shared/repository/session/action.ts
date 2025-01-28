"use server";

import { env } from "../../lib/env";
import { handleResponse } from "../../lib/response-handler";
import type { GlobalResponse } from "../../types/response";
import { getSession } from "../session-manager/action";
import type {
	AcceptSessionRequest,
	EditSessionRequest,
	GetSessionAttendeesResponse,
	GetSessionAttendeesquery,
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
		if (value !== undefined && value !== null) {
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

export async function getSessionAttendees(
	sessionId: string,
	query: GetSessionAttendeesquery,
): Promise<GlobalResponse<GetSessionAttendeesResponse>> {
	const url = new URL(`${env.API_URL}/sessions/${sessionId}/attendees`);

	for (const [key, value] of Object.entries(query)) {
		if (value !== undefined && value !== null) {
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

	return handleResponse<GetSessionAttendeesResponse>(
		"Get session attendees",
		res,
	);
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

export async function deleteSession(id: string): Promise<GlobalResponse<null>> {
	const url = new URL(`${env.API_URL}/sessions/${id}`);

	const session = await getSession();

	const res = await fetch(url.toString(), {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			"x-api-key": env.API_KEY,
			Authorization: `Bearer ${session.token}`,
		},
	});

	return handleResponse<null>("Delete session", res);
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

export async function registerSession(
	sessionId: string,
): Promise<GlobalResponse<null>> {
	const url = new URL(`${env.API_URL}/sessions/${sessionId}/register`);

	const session = await getSession();

	const res = await fetch(url.toString(), {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"x-api-key": env.API_KEY,
			Authorization: `Bearer ${session.token}`,
		},
	});

	return handleResponse<null>("Register session", res);
}

export async function deleteReviewSession(
	sessionId: string,
	userId: string,
): Promise<GlobalResponse<null>> {
	const url = new URL(
		`${env.API_URL}/sessions/${sessionId}/reviews/${userId}/remove`,
	);

	const session = await getSession();

	const res = await fetch(url.toString(), {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"x-api-key": env.API_KEY,
			Authorization: `Bearer ${session.token}`,
		},
		body: JSON.stringify({
			reason: "Spam",
		}),
	});

	return handleResponse<null>("Delete review session", res);
}
