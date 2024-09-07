<script lang="ts">
	import '../app.pcss';
	import Alert from './Alert.svelte';
	import NavBar from './NavBar.svelte';
</script>

<NavBar />
<Alert />
<div class="flex flex-col items-center w-full">
	<slot />
</div>
<footer
	class="flex flex-col items-center w-full mt-32 md:mt-40 xl:mt-60 py-4 text-sm text-gray-500"
>
	<p>© 2021 Thriving Individuals Foundation</p>
	<p>All rights reserved.</p>
</footer>
