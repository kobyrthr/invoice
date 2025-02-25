'use client';
import { useState } from 'react';
import InvoiceCard from '@/components/ui/invoice-card';
import DATA from '@/../public/data.json';
import PageHeader from './page-header';
import { InvoiceContext } from '@/context/invoice-context';
import Library from './library';

export default function Home() {
  const statuses = ['pending', 'paid', 'Draft'];
  const [selectedStatuses, setSelectedStatuses] = useState(null);

  const filteredData = selectedStatuses
    ? DATA.filter((invoice) => selectedStatuses?.includes(invoice?.status))
    : DATA;
  return (
    <div className=" grid bg-background items-center justify-items-center size-full max-[368px]:p-6 p-12 max-[368px]:pb-10 pb-20 gap-16 lg:p-20">
      <div className="size-full flex flex-col gap-8 min-[376px]:gap-14 lg:gap-16 max-w-screen-md">
        <InvoiceContext.Provider
          value={{
            statuses,
            selectedStatuses,
            setSelectedStatuses,
          }}
        >
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
        </InvoiceContext.Provider>
      </div>
    </div>
  );
}
