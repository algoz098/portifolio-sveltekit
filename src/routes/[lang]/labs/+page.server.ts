import { get } from 'svelte/store';
import loadEnv, {env } from '$lib/env.js'
import loadLang, {locale, localeName} from '$lib/loadLang'
import { redirect } from '@sveltejs/kit';
import { marked } from 'marked';


/** @type {import('./$types').PageLoad} */

export const prerender = false;

export async function load({params}) {
  await loadLang(params.lang)
  const name = get(localeName)

  if(params.lang !== name) throw redirect(307, `/${name}`)
  if (!env?.formattedName) await loadEnv()

  const readmes = {}
  let promises = []
  for (let index = 0; index < env.data.github.list.length; index++) {
    const repo = env.data.github.list[index];
    if (!repo.descriptionUrl) continue
    promises.push(new Promise((resolve) => {
      fetch(repo.descriptionUrl).then(response => response.text())
        .then(text => {
          readmes[repo.name] = marked.parse(text)
          resolve()
        })
    }))
  }

  await Promise.all(promises)

  return {
    env,
    readmes,
    params
  };
}
