import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape, v as validate_component } from "../../../chunks/index3.js";
import { p as page } from "../../../chunks/stores.js";
import { f as favicon } from "../../../chunks/avatar.js";
import { l as locale } from "../../../chunks/loadLang.js";
const styles = "";
const Social = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAZCAYAAADaILXQAAABqUlEQVRIibXV624TMRAF4C+mjZqktCAoAioB7/9WXCuVe9KQtE2z/LBdNnai7hY40sryZY/HM2dmBk3T+F/Y63F2HwM0uP5b8oBjHGGUiDMaLDDFT6y3EQx2uOUxTvCgg4E3+IJvd5EHnOKwA2mJOT6myyrygFeiC+6LJd5KbgqtjRct4mX6uhLmswd4mTdyQB+Kgcs4F585En2/xlUaA4Zp/CwGdozXBdc0kz8rrFmlcYF3HawvpXmCWcAkWdJGH/0Tc6CNISZBrYxL/OpJvlDH6DCo1fFdTJI+aNQ6H+XgtNFVJSUui/kw2Ezrf4kQ1HWhDE5XlP/dBLWMJvckHxfz66D28bE6DndhiEfF2iJgViwO9Ksxo3Q+FOsXe2KaX6Xbz9L4BG9Evc/Fmt123774wonaHRLfRb7tPI3PE2HW7Fis7avNf61EN2wjJtac2zSfiV3lSKwLH9LtB+myMqlyJ9qmrMy1UUPO0uERnibrpzss24UlPuVJl040FTtMiVObZXouvvg2b8rqt8Z7/XroWuyhX8uNXQ2aP91/pZYrsSns44cd3f83P21xSROEqxYAAAAASUVORK5CYII=";
const AMenuItem_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".active.svelte-p4kql{padding-left:56px\n  }",
  map: null
};
const AMenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { href } = $$props;
  let { title } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<a${add_attribute("href", href, 0)} class="${"pl-16 py-4 pr-5 text-4xl hover:bg-indigo-100 hover:bg-opacity-5 " + escape(
    $page.url.pathname === href ? "border-l-8 border-l-indigo-500 text-indigo-500 active" : "",
    true
  ) + " svelte-p4kql"}">${escape(title)}
</a>`;
});
const LangChanger_svelte_svelte_type_style_lang = "";
const css = {
  code: ".lang.svelte-1szgoxz:hover .tooltiptext.svelte-1szgoxz{visibility:visible}.lang.svelte-1szgoxz.svelte-1szgoxz{position:relative;display:inline-block;border-bottom:1px dotted black}.lang.svelte-1szgoxz .tooltiptext.svelte-1szgoxz{visibility:hidden;width:120px;background-color:black;color:#fff;text-align:center;padding:5px 0;border-radius:6px;position:absolute;z-index:1}",
  map: null
};
const LangChanger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lang } = $$props;
  let { tooltip } = $$props;
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  if ($$props.tooltip === void 0 && $$bindings.tooltip && tooltip !== void 0)
    $$bindings.tooltip(tooltip);
  $$result.css.add(css);
  return `<a${add_attribute("href", `/${lang}`, 0)} class="${"hover:text-gray-600 cursor-pointer lang svelte-1szgoxz"}">${escape(lang)}

  <span class="${"tooltiptext svelte-1szgoxz"}">${escape(tooltip)}</span>
</a>`;
});
const AMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const { env, params } = $page.data;
  let t = {};
  locale.subscribe((value) => {
    t = value;
  });
  let tName = params.lang;
  const aboutHref = `/${tName}`;
  const workHref = `/${tName}/work`;
  const labsHref = `/${tName}/labs`;
  $$unsubscribe_page();
  return `<aside class="${"w-58"}" aria-label="${"Sidebar"}"><div class="${"py-4 overflow-y-show decoration-white"}"><ul class="${"flex flex-col"}"><li class="${"overflow-y-show mb-10"}"><img${add_attribute("src", favicon, 0)} alt="${"Avatar Image"}" height="${"30"}" class="${"ml-32"}"></li>

      ${validate_component(AMenuItem, "AMenuItem").$$render($$result, { title: t.about, href: aboutHref }, {}, {})}
      ${validate_component(AMenuItem, "AMenuItem").$$render($$result, { title: t.work, href: workHref }, {}, {})}
      ${validate_component(AMenuItem, "AMenuItem").$$render($$result, { title: t.labs, href: labsHref }, {}, {})}
      ${validate_component(AMenuItem, "AMenuItem").$$render(
    $$result,
    {
      title: t.contact,
      href: "https://api.whatsapp.com/send?phone=5516996160622"
    },
    {},
    {}
  )}

      <li class="${"text-gray-500 flex flex-row space-x-2 self-center my-8"}">${validate_component(LangChanger, "LangChanger").$$render(
    $$result,
    {
      lang: "pt-BR",
      tooltip: t.languageTooltip
    },
    {},
    {}
  )}
        ${validate_component(LangChanger, "LangChanger").$$render($$result, { lang: "EN", tooltip: t.languageTooltip }, {}, {})}

        <a href="${"https://github.com/algoz098"}" target="${"_blank"}"><img${add_attribute("src", Social, 0)} alt="${"github icon"}"></a></li></ul></div></aside>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="${"container mr-auto mt-28"}"><div class="${"flex flex-row flex-wrap py-4"}">${validate_component(AMenu, "AMenu").$$render($$result, {}, {}, {})}

    <main role="${"main"}" class="${"pl-8 w-full sm:w-2/3 md:w-3/4 pt-1 px-2"}"><h1 class="${"text-5xl title-page mb-6"}"><span class="${"border-b-4 border-indigo-500 pb-4"}">${escape($page.data.env.formattedName)}</span></h1>

      ${slots.default ? slots.default({}) : ``}</main></div></div>`;
});
export {
  Layout as default
};
