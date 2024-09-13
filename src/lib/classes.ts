import type { ParagraphType } from './types';

export const PARAGRAPH_SIZE_CLASSES: Record<ParagraphType, string> = {
	small: 'text-2xs sm:text-xs md:text-sm xl:text-base 2xl:text-lg',
	normal: 'text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-xl',
	large: 'text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl',
	xl: 'text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl',
	'2xl': 'text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl',
};

export const SECTION_CLASSES = 'flex flex-col sm:items-center w-full';

export const NAVBAR_LINK_CLASSES =
	'block py-3 lg:py-4 xl:py-5 text-center text-white bg-secondary-800 hover:bg-secondary-600 transition-all duration-200';
