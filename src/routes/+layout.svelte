<script lang="ts">
	import '../app.pcss';
	import Alert from './Alert.svelte';
	import NavBar from './NavBar.svelte';
</script>

<NavBar />
<Alert />
<div
	class="flex flex-col items-center w-full mt-12 sm:mt-[50px] md:mt-[52px] lg:mt-[60px] xl:mt-20"
>
	<slot />
</div>
<footer class="flex flex-col items-center w-full py-4 md:py-6 xl:py-8 text-sm bg-primary-600">
	<p>© 2021 Thriving Individuals Foundation</p>
	<p>All rights reserved.</p>
</footer>
