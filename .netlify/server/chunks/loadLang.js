import { w as writable } from "./index2.js";
const EN = {
  "about": "About",
  "work": "Work",
  "labs": "Labs",
  "contact": "Contact",
  "webDeveloper": "Web Developer",
  "about_prefix": "Currently developing for new startups and founders. Also love to code in",
  "flutter": "Flutter",
  "js": "JS",
  "and": "and",
  "hireMe": "Hire me",
  "knowMore": "Know more",
  "projects": "Own projects",
  "say": "Stay hungry for knowledge.",
  "lab": "Labs.",
  "see": "See",
  more: "More",
  close: "Close",
  "languageTooltip": "Change translation"
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: EN
}, Symbol.toStringTag, { value: "Module" }));
const ptBR = {
  "about": "Sobre",
  "work": "Trabalho",
  "labs": "Laboratorio",
  "contact": "Contato",
  "webDeveloper": "Desenvolvedor web",
  "about_prefix": "Atualmente desenvolvendo para novas startups e empresas. Tambem desenvolvo em",
  "flutter": "Flutter",
  "js": "JS",
  "and": "e",
  "hireMe": "Contrate",
  "knowMore": "Conheça",
  "projects": "Projetos proprios",
  "say": "Stay hungry for knowledge.",
  "lab": "Labs.",
  "see": "Ver",
  more: "Mais",
  close: "Fechar",
  "languageTooltip": "Mudar de tradução"
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ptBR
}, Symbol.toStringTag, { value: "Module" }));
const langsAllowed = ["pt-BR", "EN"];
const localeName = writable("EN");
const locale = writable({});
async function loadLang(langRecv) {
  let lang = "EN";
  if (langsAllowed.includes(langRecv))
    lang = langRecv;
  localeName.set(lang);
  const data = /* @__PURE__ */ Object.assign({ "/src/lib/locales/EN.js": __vite_glob_0_0, "/src/lib/locales/pt-BR.js": __vite_glob_0_1 });
  let result = {};
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      if (!key.includes(lang))
        continue;
      const target = data[key];
      result = JSON.parse(JSON.stringify(target.default));
      locale.set(JSON.parse(JSON.stringify(target.default)));
    }
  }
  return result;
}
export {
  localeName as a,
  loadLang as b,
  locale as l
};
