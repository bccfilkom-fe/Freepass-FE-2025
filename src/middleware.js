import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token");
  console.log(token);
  if (token && req.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login"],
};
