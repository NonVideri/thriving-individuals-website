<script lang="ts">
	import { type ParagraphType } from './types';
	import { PARAGRAPH_SIZE_CLASSES } from './classes';
	import { cn } from './utils';

	export let title: string | undefined = undefined;
	export let description: string;
	export let type: ParagraphType = 'normal';
</script>

<li class={cn('my-2', PARAGRAPH_SIZE_CLASSES[type])}>
	{#if title}<strong>{title}</strong> — {/if}{description}
</li>
