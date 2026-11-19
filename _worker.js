// PEOPLEENT ONLY: intentionally suspend every public request at the Cloudflare Pages edge.
// Keep the source files intact for a possible future restoration.
// Deploy this worker at the root of the PEOPLEENT Pages project; do NOT add it to Pagero.
export default {
  async fetch() {
    return new Response(
      '<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex,nofollow,noarchive,nosnippet"><title>사이트 접속 중단</title></head><body>현재 사이트에 접속할 수 없습니다.</body></html>',
      {
        status: 410,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-store, max-age=0, must-revalidate',
          'X-Robots-Tag': 'noindex, nofollow, noarchive, nosnippet',
          'Content-Security-Policy': "default-src 'none'",
        },
      }
    );
  },
};
