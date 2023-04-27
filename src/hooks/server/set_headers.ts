import { BACKEND_API_KEY } from "$env/static/private";
import { PUBLIC_BACKEND_BASE_URL } from "$env/static/public";
import type { HandleFetch } from "@sveltejs/kit";

export const setHeaders = (async ({ event, fetch, request }) => {
  if (request.url.startsWith(PUBLIC_BACKEND_BASE_URL)) {
    request.headers.set("Content-Type", "application/json");
    request.headers.set("X-API-KEY", BACKEND_API_KEY);

    const sessionCookie = event.cookies.get("session");
    if (sessionCookie) {
      const { accessToken, client, uid } = JSON.parse(sessionCookie);

      if (accessToken) {
        request.headers.set("access-token", accessToken);
        request.headers.set("token-type", "Bearer");
      }
      if (client) {
        request.headers.set("client", client);
      }
      if (uid) {
        request.headers.set("uid", uid);
      }
    }
  }

  return fetch(request);
}) satisfies HandleFetch;
