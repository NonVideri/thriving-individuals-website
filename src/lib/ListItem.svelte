<script lang="ts">
	import { PARAGRAPH_SIZE_CLASSES, type ParagraphType } from './types';
	import { cn } from './utils';

	export let title: string;
	export let description: string;
	export let type: ParagraphType = 'normal';
</script>

<li class={cn('my-0.5', PARAGRAPH_SIZE_CLASSES[type])}>
	<strong>{title}</strong> — {description}
</li>
