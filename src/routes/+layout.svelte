<script>
	import '../app.postcss';
  import NavBar from './NavBar.svelte'
</script>

<NavBar />
<div class="flex flex-col items-center w-full">
  <slot />
</div>