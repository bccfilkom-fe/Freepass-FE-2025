import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import { tabsData } from "./features/dashboard/data/tabs";
import { type SessionData, sessionOptions } from "./shared/lib/session";
import { getSession } from "./shared/repository/session-manager/action";

export async function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;
	const session = await getSession();

	if (
		(!session || !session.isLoggedIn) &&
		(pathname.startsWith("/dashboard") || pathname.startsWith("/sessions"))
	) {
		return NextResponse.redirect(new URL("/login", req.nextUrl));
	}

	if (pathname === "/dashboard") {
		return NextResponse.redirect(new URL("/dashboard/overview", req.nextUrl));
	}

	if (
		session.role &&
		pathname.startsWith("/dashboard") &&
		tabsData[session.role].every((tab) => !pathname.startsWith(tab.href))
	) {
		return NextResponse.redirect(new URL("/dashboard/overview", req.nextUrl));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*", "/sessions"],
};
