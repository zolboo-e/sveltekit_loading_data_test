import { redirect } from "@sveltejs/kit";
import { PUBLIC_BACKEND_BASE_URL } from "$env/static/public";
import type { Actions, PageServerLoad } from "./$types";

export const load = (async () => {
  throw redirect(307, "/");
}) satisfies PageServerLoad;

export const actions = {
  default: async ({ cookies }) => {
    await fetch(`${PUBLIC_BACKEND_BASE_URL}/admin_agency/auth/sign_out`, {
      method: "DELETE",
    });
    cookies.set("session", "", {
      path: "/",
      maxAge: 0,
    });
    cookies.set("user", "", {
      path: "/",
      maxAge: 0,
    });

    // redirect the user
    throw redirect(307, "/login");
  },
} satisfies Actions;
