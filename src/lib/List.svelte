<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Item } from './types';
	import ListItem from './ListItem.svelte';
	export let className: string = '';
	export let items: Item[] = [];
</script>

<ol class={twMerge('list-decimal my-2', className)}>
	{#each items as item}
		<ListItem {...item} />
	{/each}
</ol>
