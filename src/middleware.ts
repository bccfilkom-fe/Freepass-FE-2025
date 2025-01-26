import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import { tabsData } from "./features/dashboard/data/tabs";
import { type SessionData, sessionOptions } from "./shared/lib/session";

export async function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;
	const session = await getIronSession<SessionData>(
		await cookies(),
		sessionOptions,
	);

	if ((!session || !session.isLoggedIn) && pathname.startsWith("/dashboard")) {
		return NextResponse.redirect(new URL("/login", req.nextUrl));
	}

	if (pathname === "/dashboard") {
		return NextResponse.redirect(new URL("/dashboard/overview", req.nextUrl));
	}

	if (
		session.role &&
		pathname.startsWith("/dashboard") &&
		tabsData[session.role].every((tab) => tab.href !== pathname)
	) {
		return NextResponse.redirect(new URL("/dashboard/overview", req.nextUrl));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*"],
};
