import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Проверяем, находится ли пользователь на главной странице
  if (request.nextUrl.pathname === '/') {
    // Перенаправляем на страницу каталога
    return NextResponse.redirect(new URL('/catalog', request.url));
  }
}

export const config = {
  matcher: '/',
};
