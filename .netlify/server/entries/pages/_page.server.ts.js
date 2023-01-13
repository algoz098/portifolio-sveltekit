import { r as redirect } from "../../chunks/index.js";
const prerender = false;
async function load() {
  throw redirect(307, "/en");
}
export {
  load,
  prerender
};
