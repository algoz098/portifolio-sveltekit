import { h as get_store_value } from "../../../../chunks/index3.js";
import { r as request, e as env } from "../../../../chunks/env.js";
import { b as loadLang, a as localeName } from "../../../../chunks/loadLang.js";
import { r as redirect } from "../../../../chunks/index.js";
const prerender = false;
async function load({ params }) {
  await loadLang(params.lang);
  const name = get_store_value(localeName);
  if (params.lang !== name)
    throw redirect(307, `/${name}`);
  if (!env?.formattedName)
    await request();
  return {
    params,
    env
  };
}
export {
  load,
  prerender
};
