import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../../../chunks/index3.js";
import { C as Card } from "../../../../chunks/Card.js";
import { f as favicon } from "../../../../chunks/avatar.js";
import { l as locale, a as localeName, b as loadLang } from "../../../../chunks/loadLang.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { env, readmes, params } = data;
  let t;
  locale.subscribe((value) => {
    t = value;
  });
  let tName;
  localeName.subscribe((value) => {
    tName = value;
  });
  loadLang(params.lang);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1f0ai17_START --><link rel="${"icon"}"${add_attribute("href", favicon, 0)}>${$$result.title = `<title>${escape(data.env.formattedName)} - ${escape(t.work)}</title>`, ""}<meta name="${"description"}" content="${"sobre"}"><!-- HEAD_svelte-1f0ai17_END -->`, ""}

<main class="${"grid grid-flow-row-dense grid-cols-3 gap-2 pb-2 pt-14"}">${each(env.data.github.list, (github) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        title: github.name,
        description: readmes[github.name] ? readmes[github.name] : github.description[tName.toLowerCase().replaceAll("-", "")],
        html: !!github.descriptionUrl,
        href: github.url
      },
      {},
      {}
    )}`;
  })}</main>`;
});
export {
  Page as default
};
