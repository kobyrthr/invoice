'use client';
import InvoiceCard from '@/components/ui/invoice-card';
import PageHeader from './page-header';
import { useContext } from 'react';
import { InvoiceContext } from '@/context/invoice-context';

export default function Home() {
  const { invoices, selectedStatuses } = useContext(InvoiceContext);
  const filteredData = selectedStatuses
    ? invoices.filter((invoice) => selectedStatuses?.includes(invoice?.status))
    : invoices;
  return (
    <div className=" grid bg-background items-center justify-items-center size-full max-[368px]:p-6 p-12 max-[368px]:pb-10 pb-20 gap-16 lg:p-20">
      <div className="size-full flex flex-col gap-8 min-[376px]:gap-14 lg:gap-16 max-w-screen-md">
        <PageHeader />

        {/* Page Body */}
        <div className="flex flex-col gap-4">
          {filteredData.map((item) => (
            <InvoiceCard
              selectedStatuses={selectedStatuses}
              key={item.id}
              invoice={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
