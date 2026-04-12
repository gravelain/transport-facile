import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["fr", "en"] as const;
type Locale = (typeof locales)[number];
const defaultLocale: Locale = "fr";

function getLocale(_request: NextRequest): Locale {
  // Always default to French — the user switches language manually via the switcher
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static assets and internal Next.js paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // static files (favicon, images…)
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a valid locale prefix
  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    // Extract locale from URL and forward it as a header for the root layout
    const locale = (pathname.split("/")[1] as Locale) || defaultLocale;
    const response = NextResponse.next();
    response.headers.set("x-locale", locale);
    return response;
  }

  // No locale in URL — redirect to default locale
  const locale = getLocale(request);
  const redirectUrl = new URL(`/${locale}${pathname}`, request.url);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
