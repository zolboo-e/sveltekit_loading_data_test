import type { PageLoad } from "./$types";

export const load = (async ({ data, url }) => {
  const { searchParams } = url;

  return { ...data, searchParams };
}) satisfies PageLoad;
