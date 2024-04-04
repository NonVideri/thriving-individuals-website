<script lang="ts">
	import { onMount } from 'svelte';

	export let id = '';
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
	class="flex flex-col items-center w-full transform translate-y-5 my-20 md:my-30 xl:my-40 px-20 md:px-40 xl:px-64 text-black {isVisible
		? 'opacity-100 animate-fadeIn'
		: 'opacity-0'}"
>
	<slot />
</section>
