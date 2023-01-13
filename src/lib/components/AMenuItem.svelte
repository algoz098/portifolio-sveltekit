<script lang="ts">
  import { page } from '$app/stores';
  import Avatar from '$lib/images/avatar.png'

  export let href: string;
  export let title: string;
</script>

<a {href} class="pl-16 py-4 pr-5 text-4xl hover:bg-indigo-100 hover:bg-opacity-5  {$page.url.pathname === href ? 'border-l-8 border-l-indigo-500 text-indigo-500 active' : ''}" >
  {title}
</a>

<style>
  .active {
    padding-left: 56px
  }
</style>
