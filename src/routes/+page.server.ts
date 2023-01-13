import { redirect } from '@sveltejs/kit';
/** @type {import('./$types').PageLoad} */

export const prerender = false;
export async function load() {
  throw redirect(307, '/en');
}
