import { get } from 'svelte/store';
import loadEnv, {env } from '../../lib/env.js'
import loadLang, {locale, localeName} from '../../lib/loadLang'
import { redirect } from '@sveltejs/kit';
/** @type {import('./$types').PageLoad} */
export const prerender = false;

export async function load({params}) {
  await loadLang(params.lang)
  const name = get(localeName)

  if(params.lang !== name) throw redirect(307, `/${name}`)
  if (!env?.formattedName) await loadEnv()

  return {
    params,
    env,
  };
}
