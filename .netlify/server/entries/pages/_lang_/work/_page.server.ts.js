import { _ as __vite_glob_0_0 } from "../../../../chunks/avatar.js";
import { _ as __vite_glob_0_7 } from "../../../../chunks/social.js";
import { h as get_store_value } from "../../../../chunks/index3.js";
import { r as request, e as env } from "../../../../chunks/env.js";
import { b as loadLang, a as localeName } from "../../../../chunks/loadLang.js";
import { r as redirect } from "../../../../chunks/index.js";
const bg_avatar = "/_app/immutable/assets/bg_avatar-bbca0d0b.png";
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bg_avatar
}, Symbol.toStringTag, { value: "Module" }));
const geekhive = "/_app/immutable/assets/geekhive-9f1a4c6d.png";
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: geekhive
}, Symbol.toStringTag, { value: "Module" }));
const ionarydevllc = "/_app/immutable/assets/ionarydevllc-72414d3a.png";
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ionarydevllc
}, Symbol.toStringTag, { value: "Module" }));
const pinterest = "/_app/immutable/assets/pinterest-9348b317.png";
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pinterest
}, Symbol.toStringTag, { value: "Module" }));
const platformpurple = "/_app/immutable/assets/platformpurple-3d8bf40d.png";
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: platformpurple
}, Symbol.toStringTag, { value: "Module" }));
const rhizatech = "/_app/immutable/assets/rhizatech-7e6a3ecf.png";
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rhizatech
}, Symbol.toStringTag, { value: "Module" }));
const prerender = false;
async function load({ params }) {
  await loadLang(params.lang);
  const name = get_store_value(localeName);
  if (params.lang !== name)
    throw redirect(307, `/${name}`);
  if (!env?.formattedName)
    await request();
  let images = {};
  const sourceImages = /* @__PURE__ */ Object.assign({ "/src/lib/images/avatar.png": __vite_glob_0_0, "/src/lib/images/bg_avatar.png": __vite_glob_0_1, "/src/lib/images/geekhive.png": __vite_glob_0_2, "/src/lib/images/ionarydevllc.png": __vite_glob_0_3, "/src/lib/images/pinterest.png": __vite_glob_0_4, "/src/lib/images/platformpurple.png": __vite_glob_0_5, "/src/lib/images/rhizatech.png": __vite_glob_0_6, "/src/lib/images/social.png": __vite_glob_0_7 });
  for (let index = 0; index < env.data.companies.list.length; index++) {
    const company = env.data.companies.list[index];
    const name2 = company.title.toLowerCase().replaceAll(" ", "");
    const key = Object.keys(sourceImages).find((e) => e.includes(name2));
    images[company.title.toLowerCase().replaceAll(" ", "")] = sourceImages[key].default;
    sourceImages[key];
  }
  return {
    images,
    params,
    env
  };
}
export {
  load,
  prerender
};
