import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest)
{
    const token = request.cookies.get("token");
    const pathname = request.nextUrl.pathname;

    if(!token && pathname === "/dashboard")
    {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    if(token && pathname === "/login")
    {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/login"],
};