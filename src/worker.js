export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Optional API route — wire this up later for the contact form:
    // if (url.pathname.startsWith('/api/')) {
    //   return handleApi(request, env);
    // }

    // Serve static assets from the built ./dist directory.
    const response = await env.ASSETS.fetch(request);

    // SPA fallback: unknown non-file paths get index.html (future-proofing).
    if (response.status === 404 && !url.pathname.includes('.')) {
      const index = await env.ASSETS.fetch(new Request(new URL('/index.html', url.origin), request));
      return new Response(index.body, {
        status: 200,
        headers: { 'content-type': 'text/html; charset=utf-8' },
      });
    }

    return response;
  },
};