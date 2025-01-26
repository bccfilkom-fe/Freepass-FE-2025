import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import { type SessionData, sessionOptions } from "./shared/lib/session";

export async function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;
	const session = await getIronSession<SessionData>(
		await cookies(),
		sessionOptions,
	);

	if (!session.isLoggedIn && pathname.startsWith("/dashboard")) {
		return NextResponse.redirect(new URL("/login", req.nextUrl));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*"],
};
