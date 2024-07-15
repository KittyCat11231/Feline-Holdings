import { NextResponse } from 'next/server'

export const config = {
    matcher: '/blog/:path*',
}

const Middleware = (req) => {
    const { pathname, origin } = req.nextUrl

    if (pathname === pathname.toLowerCase()) {
        return NextResponse.next()
    }

    return NextResponse.redirect(new URL(origin + pathname.toLowerCase()))
}

export default Middleware