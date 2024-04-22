<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { SECTION_CLASSES } from './types';

	export let className = '';
</script>

<div class={twMerge(SECTION_CLASSES, 'my-8', className)}>
	<slot />
</div>
