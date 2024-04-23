<script lang="ts">
	import { PARAGRAPH_SIZE_CLASSES } from '../lib/types';
	import { cn } from '../lib/utils';

	export let href = '';
</script>

<a
	{href}
	class={cn(
		'text-white font-semibold no-underline w-full h-full p-3 lg:p-4 xl:p-5 text-center bg-gray-800 hover:bg-gray-700 transition-all duration-300',
		PARAGRAPH_SIZE_CLASSES['large']
	)}>
	<slot />
</a>
