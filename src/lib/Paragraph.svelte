<script lang="ts">
	import type { ClassValue } from 'clsx';
	import { PARAGRAPH_SIZE_CLASSES, type ParagraphType } from './types';
	import { cn } from './utils';

	export let type: ParagraphType = 'normal';
	let className: ClassValue = undefined;
	export { className as class };
</script>

<p class={cn('my-2', PARAGRAPH_SIZE_CLASSES[type], className)}><slot /></p>
