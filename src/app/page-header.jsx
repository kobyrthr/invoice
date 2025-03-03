import React from 'react';
import FilterStatus from './filter-status';
import { Button } from '@/components/ui/button';
import { PlusCircle } from '@phosphor-icons/react';
import { Typography } from '@/components/ui/typography';
import DATA from '@/../public/data.json';
import { useIsMobile } from '@/hooks/use-mobile';
import InvoiceCreate from './[id]/components/invoice-create';

const PageHeader = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex justify-between w-full flex-wrap">
      <div className="">
        <Typography asChild type="heading-l">
          <h1>Invoices</h1>
        </Typography>
        <Typography type="body" className="text-color-07">
          {isMobile
            ? `${DATA.length} invoices`
            : `There are ${DATA.length} total invoices`}
        </Typography>
      </div>

      <div className="flex gap-4 lg:gap-10">
        <FilterStatus />
        <InvoiceCreate>
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
        </InvoiceCreate>
      </div>
    </div>
  );
};

export default PageHeader;
