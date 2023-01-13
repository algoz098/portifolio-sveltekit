<script>
  import favicon from '$lib/images/avatar.png'
  import loadLang, {locale, localeName} from '$lib/loadLang'

  /** @type {import('./$types').PageData} */
  export let data;
  const {env, params} = data

  let t;
	locale.subscribe(value => {
		t = value;
	});

  let tName = params.lang;
	localeName.subscribe(value => {
		tName = value;
	});
  const knowMoreLink = `/${tName}/work`
  loadLang(params.lang)
</script>
<svelte:head>
  <link rel="icon" href={favicon} />

  <title>{data.env.formattedName} - {t.about}</title>
  <meta name="description" content="sobre">
</svelte:head>
<section>
  <h2 class="mt-28 text-8xl">
    <strong>artur</strong> sena<strong class="text-indigo-500">.</strong>
  </h2>

  <h3 class="text-5xl mt-4 text-indigo-500">
    {t.webDeveloper}
  </h3>

  <div class="mt-16 grid grid-cols-1">
    <div class="col-xl-7 mt-0">
      <p class="w-3/5 text-gray-400 text-5xl">
        {t.about_prefix}

        <strong class="text-indigo-500">
          {t.flutter}
        </strong>

        {t.and}

        <strong class="text-indigo-500">
          {t.js}
        </strong>
      </p>
    </div>
  </div>

  <div class="mt-32 mb-36">
    <a href="https://api.whatsapp.com/send?phone=5516996160622" class="px-14 py-6 text-3xl mr-12 bg-indigo-500">
      {t.hireMe}
    </a>
    <a href={knowMoreLink} class="px-14 py-6 text-3xl mr-12 bg-gray-800 opacity-50">
        {t.knowMore}
    </a>
  </div>

  <div class="flex flex-row items-center">
    <div class="text-xl w-24 text-indigo-500 mr-14 relative prev-clients">
      {t.projects}
    </div>

    {#each env.data.github.list.slice(0, 3) as project}
      <a href={project.url} target="_blank" class="opacity-50 text-grey-400 text-4xl ml-3 " rel="noreferrer">
        {project.acronyms}
      </a>
	  {/each}
  </div>

  <div class="mt-24 pl-12 opacity-50 text-grey-400 text-4xl  ">
    {t.say}
  </div>
</section>
<style>
  section {
    background-image: url('$lib/images/bg_avatar.png');
    background-repeat: no-repeat;
    background-size: cover;
  }

  section, h2, p, h3, button, span {
    font-family: ProximaNovaLight;
  }

  .prev-clients:after {
    content: "";
    position: absolute;
    width: 2px;
    height: 55px;
    -webkit-transform: rotate(25deg);
    transform: rotate(25deg);
    background-color: #744bff;
    top: 3px;
    right: -10px;
  }
</style>
