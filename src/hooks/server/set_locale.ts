import type { Handle } from "@sveltejs/kit";

export const setLocale = (async ({ event, resolve }) => {
  const locale = "en";

  event.locals.locale = locale;

  const response = await resolve(event, {
    transformPageChunk: ({ html }) => html.replace("%lang%", locale),
  });
  return response;
}) satisfies Handle;
