<script lang="ts">
	import '../app.postcss';
	import Alert from './Alert.svelte';
	import NavBar from './NavBar.svelte';
</script>

<NavBar />
<Alert />
<div class="flex flex-col items-center w-full">
	<slot />
</div>
