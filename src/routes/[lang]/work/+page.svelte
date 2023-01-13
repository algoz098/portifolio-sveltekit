<script>
  import Card from '$lib/components/Card.svelte'

  import favicon from '$lib/images/avatar.png'
  import {locale, localeName} from '$lib/loadLang'

  /** @type {import('./$types').PageData} */
  export let data;
  const {env, images} = data

  let t;
	locale.subscribe(value => {
		t = value;
	});

  let tName;
	localeName.subscribe(value => {
		tName = value;
	});

</script>

<svelte:head>
  <link rel="icon" href={favicon} />

  <title>{data.env.formattedName} - {t.work}</title>
  <meta name="description" content="sobre">
</svelte:head>

<main class="grid grid-flow-row-dense grid-cols-3 gap-2 pb-2 pt-14">
  {#each env.data.companies.list as company}
    <Card
      title={company.title}
      description={company.description[tName.toLowerCase().replaceAll('-', '')]}
      href={company.url}
      img={images[company.title]}
    />
  {/each}
</main>
