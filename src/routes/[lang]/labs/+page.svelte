<script>
  import { page } from '$app/stores';
  import Card from '$lib/components/Card.svelte'
  import favicon from '$lib/images/avatar.png'
  import loadLang, {locale, localeName} from '$lib/loadLang'

  /** @type {import('./$types').PageData} */
  export let data;
  const {env, readmes, params} = data

  let t;
	locale.subscribe(value => {
		t = value;
	});

  let tName;
	localeName.subscribe(value => {
		tName = value;
	});

  loadLang(params.lang)
</script>

<svelte:head>
  <link rel="icon" href={favicon} />

  <title>{data.env.formattedName} - {t.work}</title>
  <meta name="description" content="sobre">
</svelte:head>

<main class="grid grid-flow-row-dense grid-cols-3 gap-2 pb-2 pt-14">
  {#each env.data.github.list as github}
    <Card
      title={github.name}
      description={readmes[github.name] ? readmes[github.name] : github.description[tName.toLowerCase().replaceAll('-', '')]}
      html={!!github.descriptionUrl}
      href={github.url}
    />
  {/each}
</main>
