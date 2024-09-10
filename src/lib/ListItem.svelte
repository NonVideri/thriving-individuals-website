<script lang="ts">
	import { type ParagraphType } from './types';
	import { PARAGRAPH_SIZE_CLASSES } from './classes';
	import { cn } from './utils';

	export let title: string;
	export let description: string;
	export let type: ParagraphType = 'normal';
</script>

<li class={cn('my-0.5', PARAGRAPH_SIZE_CLASSES[type])}>
	<strong>{title}</strong> — {description}
</li>
