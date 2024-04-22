<script lang="ts">
	import { onMount } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { SECTION_CLASSES } from './types';

	export let id = '';
	export let className = '';
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
				threshold: [0.3, 0.5]
			}
		);

		observer.observe(section);
	});
</script>

<section
	bind:this={section}
	{id}
	class={twMerge(
		SECTION_CLASSES,
		'transform translate-y-5 my-20 md:my-30 xl:my-40 px-20 md:px-40 xl:px-64 2xl:px-96',
		isVisible ? 'opacity-100 animate-fadeIn' : 'opacity-0',
		className
	)}
>
	<slot />
</section>
