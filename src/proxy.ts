import { NextResponse, type NextRequest } from "next/server";

// Quick first filter for /admin: visitors without a session cookie are sent to
// the login page before anything renders. This only checks that a cookie
// exists — the real check (valid, fully logged-in session) is requireAdmin()
// in src/lib/admin/dal.ts, which every admin page and action calls.

const SESSION_COOKIE = "ha_admin_session";
const PUBLIC_ADMIN_PATHS = ["/admin/login", "/admin/setup", "/admin/forgot", "/admin/reset"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isPublic = PUBLIC_ADMIN_PATHS.some((path) => pathname === path || pathname.startsWith(`${path}/`));

  if (!isPublic && !request.cookies.has(SESSION_COOKIE)) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  const response = NextResponse.next();
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
