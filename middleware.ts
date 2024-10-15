import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
      const token = req.nextauth?.token
      const path = req.nextUrl.pathname
      if(token && (path.startsWith("/signin") || path.startsWith("/signup"))) {
          return NextResponse.redirect(new URL("/", req.url))
      }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    },
);

export const config = { matcher: [
  "/signin",
  "/signup",
  "/dahboard",
  "/blog",
  "/blog/:path*"] };