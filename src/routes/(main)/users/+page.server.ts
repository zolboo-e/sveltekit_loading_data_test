import { redirect } from "@sveltejs/kit";
import { PUBLIC_BACKEND_BASE_URL } from "$env/static/public";

import type { PageServerLoad, Actions } from "./$types";

export const load = (async ({ fetch, url }) => {
  const response = await fetch(
    `${PUBLIC_BACKEND_BASE_URL}/admin_agency/employees?${url.searchParams}`,
    {
      method: "GET",
    }
  );

  const data: { employees: any[]; meta: any } = await response.json();

  return data;
}) satisfies PageServerLoad;

export const actions = {
  default: async ({ request, url }) => {
    const data = await request.formData();
    const keywords = data.get("keywords");
    if (typeof keywords === "string") {
      if (!keywords) {
        url.searchParams.delete("keywords");
      } else {
        url.searchParams.set("keywords", keywords);
      }
    }

    throw redirect(302, url.toString());
  },
} satisfies Actions;
