import { sequence } from "@sveltejs/kit/hooks";

import { authGuard } from "./server/auth_guard";
import { setHeaders } from "./server/set_headers";
import { setLocale } from "./server/set_locale";
import { setUser } from "./server/set_user";

export const handle = sequence(setLocale, authGuard, setUser);

export const handleFetch = setHeaders;
