export function middleware(req) {
    if (req.nextUrl.pathname.endsWith(".map")) {
      return new Response(null, { status: 404 });
    }
  }
  