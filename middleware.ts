import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // 检查是否是 dashboard 路径
  if (pathname.startsWith('/dashboard')) {
    // 这里可以添加简单的认证检查
    // 复杂的认证逻辑移到 API 路由中
    return NextResponse.next();
  }
  
  return NextResponse.next();
}

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};