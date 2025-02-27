import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type ?? 'text'}
      className={cn(
        'flex h-12 w-full rounded-md bg-white px-5 py-3.5 text-[15px] font-bold tracking-[-0.25px] shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-color-08 border border-color-05 focus-visible:!border-color-02 focus-visible:outline-none',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
