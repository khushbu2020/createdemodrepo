import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl;
  const authToken = request.cookies.get("authToken");

  // Define paths that do not require authentication
  const publicPaths = ["/", "/otpvalidation", "/otpcode"];

  // Check if the current path is a public path
  if (publicPaths.includes(url.pathname)) {
    if (authToken) {
      return NextResponse.redirect(new URL("/home", request.url));
    }

    return NextResponse.next();
  }

  if (!authToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // If authenticated, allow access to the protected path
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/otpcode",
    "/home",
    "/otpvalidation",
    "/",
    "/project",
    "/user",
    "/roles",
  ],
};
