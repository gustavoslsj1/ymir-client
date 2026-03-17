import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  console.log(`[${new Date().toISOString()}] ${request.method} ${pathname}`);

  // if (pathname.startsWith("/authenticated")) {
  //   const token = request.cookies.get("auth")?.value;

  //   console.log("Token no middleware:", token);

  //   if (!token) {
  //     console.log("Cookie não encontrado, redirecionando para login");
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }

  //   try {
  //     const secret = new TextEncoder().encode(
  //       process.env.JWT_SECRET || "your-secret-key",
  //     );
  //     await jwtVerify(token, secret);

  //     console.log("Token válido, permitindo acesso");
  //     return NextResponse.next();
  //   } catch (error) {
  //     console.log("Token inválido:", error);

  //     const response = NextResponse.redirect(new URL("/", request.url));
  //     response.cookies.delete("auth");
  //     return response;
  //   }
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/authenticated/:path*", "/profile/:path*"],
};
