import { writable } from 'svelte/store';

const langsAllowed = ['pt-BR', 'EN'];
export const localeName = writable('EN');
export const locale = writable(null);

export default async function(langRecv) {
  let lang = 'EN';
  if (langsAllowed.includes(langRecv)) lang = langRecv;
  localeName.set(lang);

  const data  = await import(`./locales/${lang}.js` /* @vite-ignore */);
  locale.set(data.default);
  return locale;
}
