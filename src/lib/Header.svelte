<script lang="ts">
	import type { ClassValue } from 'clsx';
	import { cn } from './utils';

	export let type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h2';
	let className: ClassValue = undefined;
	export { className as class };
	const HEADER_CLASSES = 'mx-5 font-semibold';
</script>

{#if type === 'h1'}
	<h1 class={cn('text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl my-6', HEADER_CLASSES, className)}>
		<slot />
	</h1>
{:else if type === 'h2'}
	<h2 class={cn('text-xl md:text-2xl xl:text-3xl 2xl:text-4xl my-5', HEADER_CLASSES, className)}>
		<slot />
	</h2>
{:else if type === 'h3'}
	<h3 class={cn('text-lg md:text-xl xl:text-2xl 2xl:text-3xl my-3', HEADER_CLASSES, className)}>
		<slot />
	</h3>
{:else if type === 'h4'}
	<h4 class={cn('text-base md:text-lg xl:text-xl 2xl:text-2xl my-2', HEADER_CLASSES, className)}>
		<slot />
	</h4>
{:else if type === 'h5'}
	<h5 class={cn('text-sm md:text-base xl:text-lg 2xl:text-xl my-1', HEADER_CLASSES, className)}>
		<slot />
	</h5>
{:else if type === 'h6'}
	<h6 class={cn('text-xs md:text-sm xl:text-base 2xl:text-lg my-0.5', HEADER_CLASSES, className)}>
		<slot />
	</h6>
{/if}
