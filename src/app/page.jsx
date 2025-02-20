'use client';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Typography } from '@/components/ui/typography';
import { SelectSeparator } from '@radix-ui/react-select';
import { PlusCircle } from '@phosphor-icons/react';
import { Fragment } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import InvoiceCard from '@/components/ui/invoice-card';
import DATA from '@/../public/data.json';

export default function Home() {
  const invoices = [1, 2, 3, 4];
  const statuses = ['Pending', 'Paid', 'Draft'];
  const isMobile = useIsMobile();

  return (
    <div className=" grid bg-background items-center justify-items-center size-full max-[368px]:p-6 p-12 max-[368px]:pb-10 pb-20 gap-16 lg:p-20">
      <div className="size-full flex flex-col gap-8 min-[376px]:gap-14 lg:gap-16 max-w-screen-md">
        <div className="flex justify-between w-full flex-wrap">
          <div className="">
            <Typography asChild type="heading-l">
              <h1>Invoices</h1>
            </Typography>
            <Typography type="body" className="text-color-07">
              {isMobile
                ? `${invoices.length} invoices`
                : `There are ${invoices.length} total invoices`}
            </Typography>
          </div>

          <div className="flex gap-4 lg:gap-20">
            <Select>
              <SelectTrigger
                defaultValue="net-1"
                className=" w-14 md:w-[118px] border-none bg-transparent p-0 normal-case"
              >
                <SelectValue
                  placeholder={isMobile ? 'Filter' : 'Filter by status'}
                />
              </SelectTrigger>
              <SelectContent
                style={{ width: 'var(--radix-select-trigger-width)' }}
                sideOffset={24}
              >
                {statuses.map((item, index) => (
                  <Fragment key={item}>
                    {index > 0 ? <SelectSeparator /> : null}
                    <SelectItem className="capitalize" value={item}>
                      {item}
                    </SelectItem>
                  </Fragment>
                ))}
              </SelectContent>
            </Select>
            <Button
              variant="primary"
              className="h-fit gap-4 p-2 pr-4"
              IconLeft={() => (
                <PlusCircle
                  height={24}
                  width={24}
                  weight="fill"
                  className="text-white min-h-8 min-w-8"
                />
              )}
            >
              <span className="pt-0.5">{isMobile ? 'New' : 'New Invoice'}</span>
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {DATA.map((item) => (
            <InvoiceCard key={item.id} invoice={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
