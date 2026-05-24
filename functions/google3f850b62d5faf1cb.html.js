export function onRequest() {
  return new Response('google-site-verification: google3f850b62d5faf1cb.html', {
    headers: {
      'content-type': 'text/plain; charset=UTF-8',
      'cache-control': 'public, max-age=300'
    }
  });
}
