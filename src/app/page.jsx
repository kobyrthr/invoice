'use client';
import { useState } from 'react';
import InvoiceCard from '@/components/ui/invoice-card';
import DATA from '@/../public/data.json';
import PageHeader from './page-header';
import { InvoiceContext } from '@/context/invoice-context';

export default function Home() {
  const statuses = ['Pending', 'Paid', 'Draft'];
  const [selectedStatus, setSelectedStatus] = useState(null);

  return (
    <div className=" grid bg-background items-center justify-items-center size-full max-[368px]:p-6 p-12 max-[368px]:pb-10 pb-20 gap-16 lg:p-20">
      <div className="size-full flex flex-col gap-8 min-[376px]:gap-14 lg:gap-16 max-w-screen-md">
        <InvoiceContext.Provider
          value={{
            statuses,
            selectedStatus,
            setSelectedStatus,
          }}
        >
          <PageHeader />

          {/* Page Body */}
          <div className="flex flex-col gap-4">
            {DATA.map((item) => (
              <InvoiceCard key={item.id} invoice={item} />
            ))}
          </div>
        </InvoiceContext.Provider>
      </div>
    </div>
  );
}
