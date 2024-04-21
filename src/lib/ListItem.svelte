<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { PARAGRAPH_SIZE_CLASSES, type ParagraphType } from './types';

	export let title: string;
	export let description: string;
	export let type: ParagraphType = 'normal';
</script>

<li class={twMerge('my-0.5', PARAGRAPH_SIZE_CLASSES[type])}>
	<strong>{title}</strong> — {description}
</li>
