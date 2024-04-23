<script lang="ts">
	import type { ClassValue } from 'clsx';
	import { SECTION_CLASSES } from './types';
	import { cn } from './utils';

	let className: ClassValue = undefined;
	export { className as class };
</script>

<div class={cn(SECTION_CLASSES, 'my-8', className)}>
	<slot />
</div>
