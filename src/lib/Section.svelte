<script lang="ts">
	import { onMount } from 'svelte';
	import { SECTION_CLASSES } from './types';
	import type { ClassValue } from 'clsx';
	import { cn } from './utils';

	export let id = '';
	let className: ClassValue = undefined;
	export { className as class };
	let section: HTMLElement;
	let isVisible = false;

	onMount(() => {
		let observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
						isVisible = true;
					} else if (
						!entry.isIntersecting ||
						(entry.isIntersecting && entry.intersectionRatio <= 0.3)
					) {
						isVisible = false;
					}
				});
			},
			{
				threshold: [0.3, 0.5],
			}
		);

		observer.observe(section);
	});
</script>

<section
	bind:this={section}
	{id}
	class={cn(
		SECTION_CLASSES,
		'transform translate-y-5 mt-20 md:mt-32 xl:mt-40 px-20 md:px-40 xl:px-64 2xl:px-96',
		isVisible ? 'opacity-100 animate-fadeIn' : 'opacity-0',
		className
	)}
>
	<slot />
</section>
