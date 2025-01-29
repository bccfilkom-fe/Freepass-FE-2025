import * as jose from "jose";
import type { RoleMap } from "./map-data";

interface TokenPayload {
	iss: string;
	exp: number;
	user_id: string;
	role: keyof typeof RoleMap;
}

export function decodeToken(token: string): TokenPayload {
	return jose.decodeJwt(token);
}
