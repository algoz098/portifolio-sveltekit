import { get } from 'svelte/store';
import loadEnv, {env } from '$lib/env.js'
import loadLang, {locale, localeName} from '$lib/loadLang'
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */

export const prerender = false;

export async function load({params}) {
  await loadLang(params.lang)
  const name = get(localeName)

  if(params.lang !== name) throw redirect(307, `/${name}`)
  if (!env?.formattedName) await loadEnv()


  let images: any = {};
  const sourceImages: any = import.meta.glob('$lib/images/*.png')
  for (let index = 0; index < env.data.companies.list.length; index++) {
    const company = env.data.companies.list[index];
    const name = company.title.toLowerCase().replaceAll(' ', '')
    const key: any = Object.keys(sourceImages).find(e => e.includes(name))
    images[company.title]  = (await sourceImages[key]()).default;
  }

  return {
    images,
    env,
  };
}
