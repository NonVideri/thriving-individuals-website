<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { PARAGRAPH_SIZE_CLASSES, type ParagraphType } from './types';

	export let type: ParagraphType = 'normal';
	export let className: string = '';
</script>

<p class={twMerge('my-2', PARAGRAPH_SIZE_CLASSES[type], className)}><slot /></p>
