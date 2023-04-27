import { redirect, type Handle } from "@sveltejs/kit";

const authRoutes = ["/login"];
export const authGuard = (async ({ event, resolve }) => {
  const session = event.cookies.get("session");

  const pathname = event.url.pathname;
  if (!session && pathname !== "/login" && !authRoutes.some((route) => pathname === route)) {
    throw redirect(307, "/login");
  } else if (session && pathname !== "/" && authRoutes.some((route) => pathname === route)) {
    throw redirect(307, "/");
  }

  const response = await resolve(event);
  return response;
}) satisfies Handle;
