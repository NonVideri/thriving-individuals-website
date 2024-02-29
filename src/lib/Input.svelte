<script lang="ts">
	export let type = 'text';
	export let value = '';
	export let placeholder = '';
	export let required = false;

	function typeAction(node: HTMLInputElement) {
		node.type = type;
	}
</script>

<input
	use:typeAction
	bind:value
	{placeholder}
	{required}
	class="px-6 py-4 text-lg border-none rounded-md outline-none focus:shadow-focus"
/>
