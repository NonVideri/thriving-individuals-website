<script lang="ts">
	import { twMerge } from "tailwind-merge";

  export let type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h2';
	export let className: string = '';
</script>

{#if type === 'h1'}
  <h1 class={twMerge("text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl mb-5 mx-5 font-semibold", className)}><slot /></h1>
{:else if type === 'h2'}
  <h2 class={twMerge("text-xl md:text-2xl xl:text-3xl 2xl:text-4xl mb-5 mx-5 font-semibold", className)}><slot /></h2>
{:else if type === 'h3'}
  <h3 class={twMerge("text-lg md:text-xl xl:text-2xl 2xl:text-3xl mb-5 mx-5 font-semibold", className)}><slot /></h3>
{:else if type === 'h4'}
  <h4 class={twMerge("text-base md:text-lg xl:text-xl 2xl:text-2xl mb-5 mx-5 font-semibold", className)}><slot /></h4>
{:else if type === 'h5'}
  <h5 class={twMerge("text-sm md:text-base xl:text-lg 2xl:text-xl mb-5 mx-5 font-semibold", className)}><slot /></h5>
{:else if type === 'h6'}
  <h6 class={twMerge("text-xs md:text-sm xl:text-base 2xl:text-lg mb-5 mx-5 font-semibold", className)}><slot /></h6>
{/if}