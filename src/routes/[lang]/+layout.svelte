<script>
	import '../styles.css';
  import AMenu from '$lib/components/AMenu.svelte'

  import { page } from '$app/stores';
</script>

<div class="container mr-auto  mt-28">
  <div class="flex flex-row flex-wrap py-4">
    <AMenu />

    <main role="main" class="pl-8 w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
      <h1 class="text-5xl title-page mb-6">
        <span class=" border-b-4 border-indigo-500 pb-4">
          {$page.data.env.formattedName}
        </span>
      </h1>

      <slot />
    </main>
  </div>
</div>
