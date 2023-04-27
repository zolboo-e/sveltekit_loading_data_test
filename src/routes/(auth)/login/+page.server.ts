import { fail, redirect } from "@sveltejs/kit";
import { PUBLIC_BACKEND_BASE_URL } from "$env/static/public";
import type { Actions, PageServerLoad } from "./$types";

export const load = (async () => {
  // todo
}) satisfies PageServerLoad;

export const actions = {
  default: async ({ cookies, fetch, request, url }) => {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");

    if (typeof email !== "string" || typeof password !== "string" || !email || !password) {
      return fail(400, { invalid: true });
    }

    const response = await fetch(`${PUBLIC_BACKEND_BASE_URL}/admin_agency/auth/sign_in`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.status !== 200) {
      switch (response.status) {
        case 401:
          return fail(400, { credentials: true });
        default:
          return fail(400, { error: "UNKNOWN_ERROR" });
      }
    }
    const accessToken = response.headers.get("access-token");
    const client = response.headers.get("client");
    const uid = response.headers.get("uid");

    // const responseType = response.headers.get("Content-Type");
    // if (responseType?.includes("text/html")) {
    // 	console.log(await response.text());
    // } else if (responseType?.includes("application/json")) {
    // 	console.log(await response.json());
    // }

    cookies.set(
      "session",
      JSON.stringify({
        accessToken,
        client,
        uid,
      }),
      {
        // send cookie for every page
        path: "/",
        // server side only cookie so you can't use `document.cookie`
        httpOnly: true,
        // only requests from same site can send cookies
        // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
        sameSite: "strict",
        // only sent over HTTPS in production
        secure: process.env.NODE_ENV === "production",
        // set cookie to expire after a month
        maxAge: 60 * 60 * 24 * 30,
      }
    );

    const { data: user } = await response.json();
    cookies.set("user", JSON.stringify(user), {
      // send cookie for every page
      path: "/",
      // server side only cookie so you can't use `document.cookie`
      httpOnly: true,
      // only requests from same site can send cookies
      // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
      sameSite: "strict",
      // only sent over HTTPS in production
      secure: process.env.NODE_ENV === "production",
      // set cookie to expire after a month
      maxAge: 60 * 60 * 24 * 30,
    });

    // // redirect the user
    const redirectTo = url.searchParams.get("redirectTo") || "/";
    throw redirect(302, redirectTo);
  },
} satisfies Actions;
