<script lang="ts">
	import { cn } from './utils';

	export let href = '';
	let className = '';
	export { className as class };
	export let target = '';
	export let rel = '';
</script>

<a
	{href}
	{target}
	{rel}
	class={cn(
		'text-blue-regular hover:text-blue-darker hover:underline font-semibold transition-all duration-300',
		className
	)}
>
	<slot />
</a>
