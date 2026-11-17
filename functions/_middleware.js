// Search deindexing + temporary public access suspension for PeopleEnt.
// An HTTP 410 removes live access and tells crawlers the URL is gone.
// This only affects the PeopleEnt Pages project; no files or content are deleted.
const blockedResponse = () => new Response(
  '<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="robots" content="noindex,nofollow,noarchive"><meta name="viewport" content="width=device-width, initial-scale=1"></head><body>현재 사이트에 접속할 수 없습니다.</body></html>',
  {
    status: 410,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store, max-age=0',
      'X-Robots-Tag': 'noindex, nofollow, noarchive',
    },
  },
);

export async function onRequest(context) {
  return blockedResponse();
}
