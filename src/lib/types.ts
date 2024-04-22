export interface Item {
  title: string;
  description: string;
}

export type ParagraphType = 'small' | 'normal' | 'large' | 'xl' | '2xl';

export const PARAGRAPH_SIZE_CLASSES: Record<ParagraphType, string> = {
  small: 'text-xs md:text-sm xl:text-base 2xl:text-lg',
  normal: 'text-sm md:text-base xl:text-lg 2xl:text-xl',
  large: 'text-base md:text-lg xl:text-xl 2xl:text-2xl',
  xl: 'text-lg md:text-xl xl:text-2xl 2xl:text-3xl',
  '2xl': 'text-xl md:text-2xl xl:text-3xl 2xl:text-4xl'
};

export const SECTION_CLASSES = 'flex flex-col items-center w-full'