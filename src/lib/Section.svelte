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
	class="flex flex-col items-center w-full transform translate-y-5 mt-20 mb-40 {isVisible
		? 'opacity-100 animate-fadeIn'
		: 'opacity-0'}"
>
	<slot />
</section>
