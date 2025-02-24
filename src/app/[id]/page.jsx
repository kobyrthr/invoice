'use client';
import { Typography } from '@/components/ui/typography';
import { useState, useEffect } from 'react';
import DATA from '@/../public/data.json';
import Link from 'next/link';
import Image from 'next/image';
import InvoiceHeader from './invoice-header';
import InvoiceBody from './invoice-body';

const InvoicePage = () => {
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const storedInvoice = JSON.parse(localStorage.getItem('invoice'));
      if (storedInvoice) {
        const invoice = DATA.find((item) => item.id === storedInvoice.id);
        setInvoice(invoice);
      }
    }, 500);
  }, []);

  return (
    <div className=" grid bg-background items-center justify-items-center size-full max-[368px]:p-6 p-12 !  pb-32 gap-16 lg:p-20">
      <div className="size-full flex flex-col gap-4 sm:gap-16 max-w-screen-md">
        <Link href="/" className="flex items-center">
          <Image
            src="/icon-arrow-left.svg"
            alt="Go back arrow"
            width={10}
            height={10}
            className="inline-block"
          />

          <Typography type="heading-s" className="inline-block ml-6">
            Go Back
          </Typography>
        </Link>
        <InvoiceHeader invoice={invoice} />
        <InvoiceBody invoice={invoice} />
      </div>
    </div>
  );
};

export default InvoicePage;
