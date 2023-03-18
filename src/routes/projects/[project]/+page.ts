export const prerender = true;

import "@fontsource/comfortaa"
import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit"
import { projects } from "../../../stuff";

export const load = (({ params }) => {
  const data = projects.filter((v) => v.name == params.project);
  if (data.length == 0) throw error(404, 'Not Found');
  return data[0];
}) satisfies PageLoad