import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

export const typography = cva('text-foreground', {
  variants: {
    type: {
      'heading-l': 'font-bold text-[36px] leading-[33px] tracking-[-1px]',
      'heading-m': 'font-bold text-[24px] leading-[22px] tracking-[-0.75px]',
      'heading-s': 'font-bold text-[15px] leading-[24px] tracking-[-0.25px]',
      'heading-s-variant':
        'font-bold md:text-[15px] leading-[15px] tracking-[-0.25px]',
      body: 'font-medium text-[13px] leading-[18px] tracking-[-0.1px]',
      'body-variant':
        'font-medium text-[13px] leading-[15px] tracking-[-0.25px]',
    },
  },
  defaultVariants: {
    type: 'body',
  },
});

export const Typography = ({
  children,
  type,
  className,
  asChild,
  ...props
}) => {
  const Comp = asChild ? Slot : 'p';
  return (
    <Comp className={cn(typography({ type, className }))} {...props}>
      {children}
    </Comp>
  );
};
