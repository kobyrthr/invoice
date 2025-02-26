import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { z } from 'zod';
import { format } from 'date-fns';
import CalendarIcon from '@/../public/icon-calendar.svg';
import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Image from 'next/image';

const FormSchema = z.object({
  dob: z.date({
    required_error: 'A date of birth is required.',
  }),
});

const InvoiceCalendar = ({ field, className }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-full py-4 text-left justify-between bg-popover hover:border-color-01',
            !field.value && 'text-muted-foreground',
            className
          )}
        >
          {field.value ? (
            format(field.value, 'dd MMM yyyy')
          ) : (
            <span>Pick a date</span>
          )}
          <Image src={CalendarIcon} alt="calendar" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px] p-0" align="start" sideOffset={24}>
        <Calendar
          mode="single"
          selected={field.value}
          onSelect={(date) => field.onChange(format(date, 'yyyy-MM-dd'))}
          disabled={(date) =>
            date > new Date() || date < new Date('1900-01-01')
          }
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default InvoiceCalendar;
