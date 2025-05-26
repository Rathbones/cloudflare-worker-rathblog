export default {
  async fetch(request) {
    return new Response(`<!DOCTYPE html>
      <html>
        <head><title>Offline</title></head>
        <body style="font-family: sans-serif; text-align: center; padding: 4rem;">
          <h1>The Rathblog is Offline</h1>
          <p>My Server’s not on right now (old fashioned eh?). Maybe I’m out walking, coding, or building LEGO.</p>
          <p>Come back soon or send a carrier pigeon 🕊️</p>
        </body>
      </html>`, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
      },
    });
  },
};
