import { h as get_store_value } from "../../../../chunks/index3.js";
import { r as request, e as env } from "../../../../chunks/env.js";
import { b as loadLang, a as localeName } from "../../../../chunks/loadLang.js";
import { r as redirect } from "../../../../chunks/index.js";
import { marked } from "marked";
const prerender = false;
async function load({ params }) {
  await loadLang(params.lang);
  const name = get_store_value(localeName);
  if (params.lang !== name)
    throw redirect(307, `/${name}`);
  if (!env?.formattedName)
    await request();
  const readmes = {};
  let promises = [];
  for (let index = 0; index < env.data.github.list.length; index++) {
    const repo = env.data.github.list[index];
    if (!repo.descriptionUrl)
      continue;
    promises.push(new Promise((resolve) => {
      fetch(repo.descriptionUrl).then((response) => response.text()).then((text) => {
        readmes[repo.name] = marked.parse(text);
        resolve();
      });
    }));
  }
  await Promise.all(promises);
  return {
    env,
    readmes,
    params
  };
}
export {
  load,
  prerender
};
