<script>
  import { page } from '$app/stores';
  const {env} = $page.data

  import Avatar from '$lib/images/avatar.png'
  import Social from '$lib/images/social.png'

  import AMenuItem from '$lib/components/AMenuItem.svelte'
  import LangChanger from '$lib/components/LangChanger.svelte'

  import {locale, localeName} from '$lib/loadLang'
  let t;
	locale.subscribe(value => {
		t = value;
	});

  let tName;
	localeName.subscribe(value => {
		tName = value;
	});

  const aboutHref = `/${tName}`
  const workHref = `/${tName}/work`
  const labsHref = `/${tName}/labs`
</script>

<aside class="w-58" aria-label="Sidebar">
  <div class="py-4 overflow-y-show decoration-white">
    <ul class="flex flex-col">
      <li class="overflow-y-show mb-10">
        <img src={Avatar} alt="Avatar Image" height="30" class="ml-32">
      </li>

      <AMenuItem title={t.about} href={aboutHref} />
      <AMenuItem title={t.work} href={workHref} />
      <AMenuItem title={t.labs} href={labsHref} />
      <AMenuItem title={t.contact} href="https://api.whatsapp.com/send?phone=5516996160622" />

      <li class="text-gray-500 flex flex-row space-x-2 self-center my-8">
        <LangChanger lang="pt-BR" tooltip={t.languageTooltip} />
        <LangChanger lang="EN" tooltip={t.languageTooltip} />

        <a href="https://github.com/algoz098" target="_blank">
          <img src={Social}  alt="github icon" />
        </a>
      </li>
    </ul>
  </div>
</aside>
