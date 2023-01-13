import { writable } from 'svelte/store';
const langsAllowed = ['pt-BR', 'EN'];
export const localeName = writable('EN');
export const locale = writable({});

export default async function(langRecv) {
  let lang = 'EN';
  if (langsAllowed.includes(langRecv)) lang = langRecv;
  localeName.set(lang);

  const data  = import.meta.glob(`$lib/locales/*.js`, { eager: true })
  let result = {}
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      if (!key.includes(lang)) continue
      const target= data[key];
      result = JSON.parse(JSON.stringify(target.default))
      locale.set(JSON.parse(JSON.stringify(target.default)))

    }
  }
  return result;
}
