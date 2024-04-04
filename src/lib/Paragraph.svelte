<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	type ParagraphType = 'small' | 'normal' | 'large' | 'xl' | '2xl';
	export let type: ParagraphType = 'normal';
	export let className: string = '';

	const sizes: Record<ParagraphType, string> = {
		small: 'text-xs md:text-sm xl:text-base',
		normal: 'text-sm md:text-base xl:text-lg',
		large: 'text-base md:text-lg xl:text-xl',
		xl: 'text-lg md:text-xl xl:text-2xl',
		'2xl': 'text-xl md:text-2xl xl:text-3xl'
	};

	const size = sizes[type];
</script>

<p class={twMerge('my-2', size, className)}><slot /></p>
