import { c as create_ssr_component, d as add_attribute, e as escape, f as each } from "../../../chunks/index3.js";
import { f as favicon } from "../../../chunks/avatar.js";
import { l as locale, a as localeName, b as loadLang } from "../../../chunks/loadLang.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: `section.svelte-5ec0s8{background-image:url('$lib/images/bg_avatar.png');background-repeat:no-repeat;background-size:cover}section.svelte-5ec0s8,h2.svelte-5ec0s8,p.svelte-5ec0s8,h3.svelte-5ec0s8{font-family:ProximaNovaLight}.prev-clients.svelte-5ec0s8:after{content:"";position:absolute;width:2px;height:55px;-webkit-transform:rotate(25deg);transform:rotate(25deg);background-color:#744bff;top:3px;right:-10px}`,
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { env, params } = data;
  let t;
  locale.subscribe((value) => {
    t = value;
  });
  params.lang;
  localeName.subscribe((value) => {
  });
  const knowMoreLink = `/${localeName}/work`;
  loadLang(params.lang);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1mrevsz_START --><link rel="${"icon"}"${add_attribute("href", favicon, 0)}>${$$result.title = `<title>${escape(data.env.formattedName)} - ${escape(t.about)}</title>`, ""}<meta name="${"description"}" content="${"sobre"}"><!-- HEAD_svelte-1mrevsz_END -->`, ""}
<section class="${"svelte-5ec0s8"}"><h2 class="${"mt-28 text-8xl svelte-5ec0s8"}"><strong>artur</strong> sena<strong class="${"text-indigo-500"}">.</strong></h2>

  <h3 class="${"text-5xl mt-4 text-indigo-500 svelte-5ec0s8"}">${escape(t.webDeveloper)}</h3>

  <div class="${"mt-16 grid grid-cols-1"}"><div class="${"col-xl-7 mt-0"}"><p class="${"w-3/5 text-gray-400 text-5xl svelte-5ec0s8"}">${escape(t.about_prefix)}

        <strong class="${"text-indigo-500"}">${escape(t.flutter)}</strong>

        ${escape(t.and)}

        <strong class="${"text-indigo-500"}">${escape(t.js)}</strong></p></div></div>

  <div class="${"mt-32 mb-36"}"><a href="${"https://api.whatsapp.com/send?phone=5516996160622"}" class="${"px-14 py-6 text-3xl mr-12 bg-indigo-500"}">${escape(t.hireMe)}</a>

    <a${add_attribute("href", knowMoreLink, 0)} class="${"px-14 py-6 text-3xl mr-12 bg-gray-800 opacity-50"}">${escape(t.knowMore)}</a></div>

  <div class="${"flex flex-row items-center"}"><div class="${"text-xl w-24 text-indigo-500 mr-14 relative prev-clients svelte-5ec0s8"}">${escape(t.projects)}</div>

    ${each(env.data.github.list.slice(0, 3), (project) => {
    return `<a${add_attribute("href", project.url, 0)} target="${"_blank"}" class="${"opacity-50 text-grey-400 text-4xl ml-3 "}" rel="${"noreferrer"}">${escape(project.acronyms)}
      </a>`;
  })}</div>

  <div class="${"mt-24 pl-12 opacity-50 text-grey-400 text-4xl "}">${escape(t.say)}</div>
</section>`;
});
export {
  Page as default
};
