import { NextResponse } from "next/server";

export function middleware(request) {
  const currentUser = request.cookies.get("next-auth.session-token");
  const url = request.url;
  console.log(url);
  if (!currentUser && url.includes("/profile")) {
    return NextResponse.redirect(
      new URL("http://localhost:3000", request.url)
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
