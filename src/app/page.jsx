'use client';
import InvoiceCard from '@/components/ui/invoice-card';
import PageHeader from './page-header';
import { useContext } from 'react';
import { InvoiceContext } from '@/context/invoice-context';
import EmptyList from './empty-list';
import { cn } from '@/lib/utils';

export default function Home() {
  const { invoices, selectedStatuses } = useContext(InvoiceContext);
  const filteredData = selectedStatuses
    ? invoices.filter((invoice) => selectedStatuses?.includes(invoice?.status))
    : invoices;
  return (
    <div className=" grid bg-background items-center justify-items-center size-full max-[376px]:p-6 p-12 max-[376px]:pb-10 pb-20 gap-16 lg:p-20">
      <div className="size-full flex flex-col gap-8 min-[376px]:gap-14 lg:gap-16 max-w-screen-md">
        <PageHeader />

        {/* Page Body */}
        <div
          className={cn('size-full flex flex-col gap-4', {
            'justify-center': !filteredData.length,
          })}
        >
          {filteredData.length ? (
            filteredData.map((item) => (
              <InvoiceCard
                selectedStatuses={selectedStatuses}
                key={item.id}
                invoice={item}
              />
            ))
          ) : (
            <EmptyList />
          )}
        </div>
      </div>
    </div>
  );
}
