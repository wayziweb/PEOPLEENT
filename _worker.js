// Cloudflare Pages advanced-mode fallback.
// Intentionally suspend every PeopleEnt request without deleting original files.
// Restore by removing this file when the site should reopen.
export default {
  async fetch() {
    return new Response(
      '<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="robots" content="noindex,nofollow,noarchive"><meta name="viewport" content="width=device-width, initial-scale=1"></head><body>현재 사이트에 접속할 수 없습니다.</body></html>',
      {
        status: 410,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-store, max-age=0',
          'X-Robots-Tag': 'noindex, nofollow, noarchive'
        }
      }
    );
  }
};
