<script>
  export let img;
  export let title;
  export let description;
  export let html = false;
  export let href;
  import { page } from '$app/stores';
  const {params} = $page.data

  import {locale, localeName} from '$lib/loadLang'
  let t;
	locale.subscribe(value => {
		t = value;
	});

  let tName = params.lang;
	localeName.subscribe(value => {
		tName = value;
	});

  const aboutHref = `/${tName}`
  const workHref = `/${tName}/work`
  const labsHref = `/${tName}/labs`

  let show = false;
</script>

<div class="relative">
  <div class="text-4xl h-35 hover:bg-indigo-600 hover:bg-opacity-40 bg-indigo-100 bg-opacity-5">
    {#if img}
      <div class="h-40 grid grid-cols-1 content-center overflow-hidden">
        <img class="" src={img} alt={title} />
      </div>
    {/if}

    <div class="p-6">
      <h2 class="text-xl text-indigo-400 mb-2">
        {title}
      </h2>

      <div class="h-40 leading-4 overflow-hidden text-ellipsis text-justify">
        {#if html}
          <small class="text-lg  line-clamp-6" >{@html description} </small>
        {:else}
          <small class="text-lg  line-clamp-6">
            {description}
          </small>
        {/if}
      </div>

      <div class="flex items-end mt-2">
        <button data-show-modal={title} on:click={() => show = true} class="mt-auto text-base text-indigo-400">
          {t.more}
        </button >

        {#if href}
          <a href={href} class="ml-auto mt-auto text-lg text-indigo-600" target="_blank">
            {t.see}
          </a>
        {/if}
      </div>
    </div>
  </div>
</div>

<div class="relative z-10 {show ? '' : 'hidden'}" data-modal-id={title} role="dialog" aria-modal="true">
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"  on:click={() => show = false}></div>

  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

      <div class="text-4xl w-9/12	 h-5/6 bg-black relative">
        {#if img}
          <div class="h-80 grid grid-cols-1 content-center overflow-hidden">
            <img class="" src={img} alt={title} />
          </div>
        {/if}
          <div class="p-6">
            <h2 class="text-xl text-indigo-400 mb-2">
              {title}
            </h2>

            <div class="leading-4 overflow-hidden text-left">
              {#if html}
                <small class="text-lg" >{@html description} </small>
              {:else}
                <small class="text-lg">
                  {description}
                </small>
              {/if}
            </div>

            <div class="flex items-end mt-2">
              <button data-hide-modal={title} on:click={() => show = false} class=" mt-auto text-base text-indigo-400">
                {t.close}
              </button >

              {#if href}
                <a href={href} class="ml-auto mt-auto text-lg text-indigo-600" target="_blank">
                  {t.see}
                </a>
              {/if}
              </div>
          </div>
      </div>
    </div>
  </div>
</div>
