'use client';
import { Typography } from '@/components/ui/typography';
import { useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import InvoiceHeader from './components/invoice-header';
import InvoiceBody from './components/invoice-body';
import { InvoiceContext } from '@/context/invoice-context';
import { useParams, useRouter } from 'next/navigation';

const InvoicePage = () => {
  const { invoice, setInvoice, invoices } = useContext(InvoiceContext);
  const params = useParams();
  const id = params.id;
  const router = useRouter();

  useEffect(() => {
    if (!invoice) {
      const invoice = invoices.find((item) => item.id === id);
      setInvoice(invoice);
    }
  }, []);

  useEffect(() => {
    if (!invoice) {
      router.push('/');
    }
  }, [invoice]);

  return (
    <div className=" grid bg-background items-center justify-items-center size-full max-[376px]:p-6 p-12 !pb-24 gap-16 lg:p-20">
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
