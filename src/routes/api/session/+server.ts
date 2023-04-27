import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET = (({ cookies }) => {
	const sessionCookie = cookies.get("session");

	if (!sessionCookie) {
		throw error(401, "not logged in");
	}

	return json(JSON.parse(sessionCookie));
}) satisfies RequestHandler;
