import { NextResponse } from "next/server";

export const middleware = async () => {
  try {
    return NextResponse.next();
  } catch (error) {
    console.error(error);
  }
};

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|apple-icon.png|manifest.webmanifest).*)",
  ],
};
