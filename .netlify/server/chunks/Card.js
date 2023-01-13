import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape } from "./index3.js";
import { p as page } from "./stores.js";
import { l as locale, a as localeName } from "./loadLang.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { img } = $$props;
  let { title } = $$props;
  let { description } = $$props;
  let { html = false } = $$props;
  let { href } = $$props;
  const { params } = $page.data;
  let t;
  locale.subscribe((value) => {
    t = value;
  });
  params.lang;
  localeName.subscribe((value) => {
  });
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.html === void 0 && $$bindings.html && html !== void 0)
    $$bindings.html(html);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  $$unsubscribe_page();
  return `<div class="${"relative"}"><div class="${"text-4xl h-35 hover:bg-indigo-600 hover:bg-opacity-40 bg-indigo-100 bg-opacity-5"}">${img ? `<div class="${"h-40 grid grid-cols-1 content-center overflow-hidden"}"><img class="${""}"${add_attribute("src", img, 0)}${add_attribute("alt", title, 0)}></div>` : ``}

    <div class="${"p-6"}"><h2 class="${"text-xl text-indigo-400 mb-2"}">${escape(title)}</h2>

      <div class="${"h-40 leading-4 overflow-hidden text-ellipsis text-justify"}">${html ? `<small class="${"text-lg line-clamp-6"}"><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></small>` : `<small class="${"text-lg line-clamp-6"}">${escape(description)}</small>`}</div>

      <div class="${"flex items-end mt-2"}"><button${add_attribute("data-show-modal", title, 0)} class="${"mt-auto text-base text-indigo-400"}">${escape(t.more)}</button>

        ${href ? `<a${add_attribute("href", href, 0)} class="${"ml-auto mt-auto text-lg text-indigo-600"}" target="${"_blank"}">${escape(t.see)}</a>` : ``}</div></div></div></div>

<div class="${"relative z-10 " + escape("hidden", true)}"${add_attribute("data-modal-id", title, 0)} role="${"dialog"}" aria-modal="${"true"}"><div class="${"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"}"></div>

  <div class="${"fixed inset-0 z-10 overflow-y-auto"}"><div class="${"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"}"><div class="${"text-4xl w-9/12 h-5/6 bg-black relative"}">${img ? `<div class="${"h-80 grid grid-cols-1 content-center overflow-hidden"}"><img class="${""}"${add_attribute("src", img, 0)}${add_attribute("alt", title, 0)}></div>` : ``}
          <div class="${"p-6"}"><h2 class="${"text-xl text-indigo-400 mb-2"}">${escape(title)}</h2>

            <div class="${"leading-4 overflow-hidden text-left"}">${html ? `<small class="${"text-lg"}"><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></small>` : `<small class="${"text-lg"}">${escape(description)}</small>`}</div>

            <div class="${"flex items-end mt-2"}"><button${add_attribute("data-hide-modal", title, 0)} class="${"mt-auto text-base text-indigo-400"}">${escape(t.close)}</button>

              ${href ? `<a${add_attribute("href", href, 0)} class="${"ml-auto mt-auto text-lg text-indigo-600"}" target="${"_blank"}">${escape(t.see)}</a>` : ``}</div></div></div></div></div></div>`;
});
export {
  Card as C
};
