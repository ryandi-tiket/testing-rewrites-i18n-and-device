import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(req: NextRequest) {
  const country = req.geo.country?.toLowerCase() || 'us'

  // Only rewrite files that don't have a file extension
  if (!PUBLIC_FILE.test(req.nextUrl.pathname)) {
    const device = Math.random() > 0.5 ? 'mobile' : 'desktop'
    const locale = Math.random() > 0.5 ? 'id' : 'en'
    req.nextUrl.pathname = `/${locale}${req.nextUrl.pathname}/${device}`
    console.log(req.nextUrl)

    return NextResponse.rewrite(req.nextUrl)
  }
}
