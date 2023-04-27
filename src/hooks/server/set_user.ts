import type { Handle } from "@sveltejs/kit";

export const setUser = (async ({ event, resolve }) => {
  const user = event.cookies.get("user");
  if (user) {
    event.locals.user = JSON.parse(user);
  }

  const response = await resolve(event);
  return response;
}) satisfies Handle;
