import type { SessionOptions } from "iron-session";
import { env } from "./env";
import type { RoleMap } from "./map-data";

// 8 hours in milliseconds
const MAX_AGE = 8 * 60 * 60 * 1000;

export interface SessionData {
	user_id?: string;
	role?: keyof typeof RoleMap;
	token?: string;
	isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
	isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
	password: env.SESSION_PASSWORD,
	cookieName: "session-cookie",
	cookieOptions: {
		//  allow 1 minute buffer
		maxAge: MAX_AGE - 60 * 1000,
		secure: true,
	},
};
