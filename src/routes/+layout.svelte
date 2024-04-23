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
