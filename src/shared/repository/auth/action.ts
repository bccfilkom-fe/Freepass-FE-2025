"use server";

import { env } from "@/shared/lib/env";
import { handleResponse } from "@/shared/lib/response-handler";
import type { GlobalResponse } from "@/shared/types/response";
import {
	getSession as _getSession,
	destroySession,
} from "../session-manager/action";
import type {
	GetSessionResponse,
	LoginRequest,
	LoginResponse,
	RegisterRequest,
} from "./dto";

const url = new URL(`${env.API_URL}/auth`);

export async function login(
	req: LoginRequest,
): Promise<GlobalResponse<LoginResponse>> {
	const res = await fetch(`${url.toString()}/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"x-api-key": env.API_KEY,
		},
		body: JSON.stringify(req),
	});

	return handleResponse<LoginResponse>("Login", res);
}

export async function register(
	req: RegisterRequest,
): Promise<GlobalResponse<null>> {
	const res = await fetch(`${url.toString()}/register`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"x-api-key": env.API_KEY,
		},
		body: JSON.stringify(req),
	});

	return handleResponse<null>("Register", res);
}

export async function logout() {
	await destroySession();
}

export async function getSession(): Promise<
	GlobalResponse<GetSessionResponse>
> {
	const session = await _getSession();

	const res = await fetch(`${url.toString()}/session`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"x-api-key": env.API_KEY,
			Authorization: `Bearer ${session.token}`,
		},
	});

	return handleResponse<GetSessionResponse>("Get session", res);
}
