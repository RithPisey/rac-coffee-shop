// middleware.ts
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  //   return NextResponse.redirect(new URL("/about-2", request.url));
  console.log(request);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/about"],
};
