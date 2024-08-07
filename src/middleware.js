import { NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';
import { fallbackLng, languages, cookieName } from './app/i18n/settings';

acceptLanguage.languages(languages);

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
};

export function middleware(req) {
    let lng;
    if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName).value);
    if (!lng) lng = fallbackLng;

    // Get the pathname
    const pathname = req.nextUrl.pathname;

    // Remove the language prefix from the pathname if it exists
    const pathnameWithoutLang = languages.some(lang => pathname.startsWith(`/${lang}`))
        ? pathname.replace(/^\/[a-z]{2}/, '')
        : pathname;

    // Redirect if lng in path is not supported
    if (
        !languages.some(loc => pathname.startsWith(`/${loc}`)) &&
        !pathname.startsWith('/_next')
    ) {
        return NextResponse.redirect(new URL(`/${lng}${pathname}`, req.url));
    }

    const response = NextResponse.next();

    if (req.headers.has('referer')) {
        const refererUrl = new URL(req.headers.get('referer'));
        const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`));
        if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    }

    // กำหนด base URL
    const baseUrl = 'https://www.revomedgroup.com';

    // สร้าง hreflangUrls โดยรวม pathname
    const hreflangUrls = languages.reduce((acc, lang) => {
        acc[lang] = `${baseUrl}/${lang}${pathnameWithoutLang}`;
        return acc;
    }, {});

    // สร้าง hreflang tags
    const hreflangTags = Object.entries(hreflangUrls).map(([lang, url]) => 
        `<link rel="alternate" hreflang="${lang}" href="${url}" />`
    ).join('');

    // เพิ่ม x-hreflang header
    response.headers.set('x-hreflang', hreflangTags);

    return response;
}