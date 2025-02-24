'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import DATA from '@/../public/data.json';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

const LoaderSkeleton = ({ children, isLoading = true, className }) => {
  return isLoading ? (
    <Skeleton
      className={cn('w-full h-5 flex flex-row justify-between', className)}
    />
  ) : (
    children
  );
};

const InvoicePage = () => {
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const storedInvoice = JSON.parse(localStorage.getItem('invoice'));
      if (storedInvoice) {
        const invoice = DATA.find((item) => item.id === storedInvoice.id);
        setInvoice(invoice);
        console.log('debug', invoice);
      }
    }, 800);
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
        <Card>
          <CardContent className="w-full h-[88px] flex flex-row justify-between">
            <div className="flex items-center w-full justify-between sm:justify-start gap-3 md:gap-5">
              <LoaderSkeleton
                className="inline-block w-10"
                isLoading={invoice === null}
              >
                <Typography
                  asChild
                  type="body-variant"
                  className="text-color-06"
                >
                  <span>Status</span>
                </Typography>
              </LoaderSkeleton>
              <LoaderSkeleton
                className="inline-block w-20"
                isLoading={invoice === null}
              >
                <Badge variant={invoice?.status}> {invoice?.status}</Badge>
              </LoaderSkeleton>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <LoaderSkeleton
                className="inline-block w-20 h-10 rounded-full"
                isLoading={invoice === null}
              >
                <Button
                  variant="default"
                  className="min-h-fit leading-6 px-3 md:px-6 py-2 md:py-4"
                >
                  Edit
                </Button>
              </LoaderSkeleton>

              <LoaderSkeleton
                className="inline-block w-20 h-10 rounded-full"
                isLoading={invoice === null}
              >
                <Button
                  variant="destructive"
                  className="min-h-fit leading-6 px-3 md:px-6 py-2 md:py-4"
                >
                  Delete
                </Button>
              </LoaderSkeleton>

              <LoaderSkeleton
                className="inline-block w-20 h-10 rounded-full"
                isLoading={invoice === null}
              >
                <Button
                  variant="primary"
                  className="min-h-fit leading-6 px-3 md:px-6 py-2 md:py-4"
                >
                  Mark as Paid
                </Button>
              </LoaderSkeleton>
            </div>

            <div className="bg-popover absolute inset-0 top-auto flex sm:hidden justify-center items-center gap-2 px-6 py-5">
              <LoaderSkeleton
                className="inline-block w-20 h-10 rounded-full"
                isLoading={invoice === null}
              >
                <Button
                  variant="default"
                  className="min-h-fit leading-6 px-3 md:px-6 py-2 md:py-4"
                >
                  Edit
                </Button>
              </LoaderSkeleton>

              <LoaderSkeleton
                className="inline-block w-20 h-10 rounded-full"
                isLoading={invoice === null}
              >
                <Button
                  variant="destructive"
                  className="min-h-fit leading-6 px-3 md:px-6 py-2 md:py-4"
                >
                  Delete
                </Button>
              </LoaderSkeleton>

              <LoaderSkeleton
                className="inline-block w-20 h-10 rounded-full"
                isLoading={invoice === null}
              >
                <Button
                  variant="primary"
                  className="min-h-fit leading-6 px-3 md:px-6 py-2 md:py-4"
                >
                  Mark as Paid
                </Button>
              </LoaderSkeleton>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="w-full">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div className="flex flex-col gap-2">
                <LoaderSkeleton className="w-20" isLoading={invoice === null}>
                  <Typography asChild type="heading-s" className="">
                    <span>
                      <span className="text-color-06">#</span>
                      {invoice?.id}
                    </span>
                  </Typography>
                </LoaderSkeleton>
                <LoaderSkeleton className="w-24" isLoading={invoice === null}>
                  <Typography
                    asChild
                    type="body-variant"
                    className="text-color-06"
                  >
                    <span>{invoice?.description}</span>
                  </Typography>
                </LoaderSkeleton>
              </div>

              <div className="flex flex-col gap-1 sm:items-end min-w-20">
                <LoaderSkeleton
                  className="h-3 w-28"
                  isLoading={invoice === null}
                >
                  <Typography type="body-variant" className="text-color-06">
                    {invoice?.senderAddress?.street}
                  </Typography>
                </LoaderSkeleton>
                <LoaderSkeleton
                  className="h-3 w-20"
                  isLoading={invoice === null}
                >
                  <Typography type="body-variant" className="text-color-06">
                    {invoice?.senderAddress?.city}
                  </Typography>
                </LoaderSkeleton>
                <LoaderSkeleton
                  className="h-3 w-16"
                  isLoading={invoice === null}
                >
                  <Typography type="body-variant" className="text-color-06">
                    {invoice?.senderAddress?.postCode}
                  </Typography>
                </LoaderSkeleton>
                <LoaderSkeleton
                  className="h-3 w-24"
                  isLoading={invoice === null}
                >
                  <Typography type="body-variant" className="text-color-06">
                    {invoice?.senderAddress?.country}
                  </Typography>
                </LoaderSkeleton>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-between mt-5 pr-24">
              <div className="flex flex-col gap-2">
                <LoaderSkeleton className="w-20" isLoading={invoice === null}>
                  <Typography
                    type="body-variant"
                    className="text-color-06 leading-[20px]"
                  >
                    Invoice Date
                  </Typography>
                </LoaderSkeleton>
                <LoaderSkeleton className="w-24" isLoading={invoice === null}>
                  <Typography type="heading-s" className="leading-[20px]">
                    {invoice?.createdAt}
                  </Typography>
                </LoaderSkeleton>

                <LoaderSkeleton
                  className="w-20 mt-6"
                  isLoading={invoice === null}
                >
                  <Typography
                    type="body-variant"
                    className="text-color-06 leading-[20px] mt-6"
                  >
                    Payment Date
                  </Typography>
                </LoaderSkeleton>
                <LoaderSkeleton className="w-24" isLoading={invoice === null}>
                  <Typography type="heading-s" className="leading-[20px]">
                    {invoice?.paymentDue}
                  </Typography>
                </LoaderSkeleton>
              </div>

              <div className="flex flex-col">
                <LoaderSkeleton className="w-20" isLoading={invoice === null}>
                  <Typography
                    type="body-variant"
                    className="text-color-06 leading-[20px]"
                  >
                    Bill To
                  </Typography>
                </LoaderSkeleton>
                <LoaderSkeleton
                  className="w-24 mt-2"
                  isLoading={invoice === null}
                >
                  <Typography type="heading-s" className="leading-[20px] mt-2">
                    {invoice?.clientName}
                  </Typography>
                </LoaderSkeleton>

                <LoaderSkeleton
                  className="w-24 mt-2"
                  isLoading={invoice === null}
                >
                  <Typography
                    type="body-variant"
                    className="leading-[20px] text-color-06 mt-2"
                  >
                    {invoice?.clientAddress?.street}
                  </Typography>
                </LoaderSkeleton>
                <LoaderSkeleton className="w-24" isLoading={invoice === null}>
                  <Typography
                    type="body-variant"
                    className="leading-[20px] text-color-06"
                  >
                    {invoice?.clientAddress?.city}
                  </Typography>
                </LoaderSkeleton>
                <LoaderSkeleton className="w-24" isLoading={invoice === null}>
                  <Typography
                    type="body-variant"
                    className="leading-[20px] text-color-06"
                  >
                    {invoice?.clientAddress?.postCode}
                  </Typography>
                </LoaderSkeleton>
                <LoaderSkeleton className="w-24" isLoading={invoice === null}>
                  <Typography
                    type="body-variant"
                    className="leading-[20px] text-color-06"
                  >
                    {invoice?.clientAddress?.country}
                  </Typography>
                </LoaderSkeleton>
              </div>

              <div className="flex flex-col gap-2 w-full mt-4 sm:mt-0 sm:w-auto">
                <LoaderSkeleton className="w-20" isLoading={invoice === null}>
                  <Typography
                    type="body-variant"
                    className="text-color-06 leading-[20px]"
                  >
                    Sent To
                  </Typography>
                </LoaderSkeleton>
                <LoaderSkeleton className="w-24" isLoading={invoice === null}>
                  <Typography type="heading-s" className="leading-[20px]">
                    {invoice?.clientEmail}
                  </Typography>
                </LoaderSkeleton>
              </div>
            </div>

            <div className="flex flex-col bg-color-07-base">
              <div className="flex flex-col p-6">
                {invoice?.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-row justify-between items-center"
                  >
                    <div className="flex flex-col gap-1">
                      <LoaderSkeleton
                        className="w-20"
                        isLoading={invoice === null}
                      >
                        <Typography asChild type="heading-s" className="">
                          <span>{item?.name}</span>
                        </Typography>
                      </LoaderSkeleton>
                      <LoaderSkeleton
                        className="w-24"
                        isLoading={invoice === null}
                      >
                        <div className="">
                          <Typography
                            asChild
                            type="heading-s"
                            className="text-color-07"
                          >
                            <span>{item?.quantity}</span>
                          </Typography>
                          <Typography
                            asChild
                            type="heading-s"
                            className="text-color-07"
                          >
                            <span> x £ {parseInt(item?.price).toFixed(2)}</span>
                          </Typography>
                        </div>
                      </LoaderSkeleton>
                    </div>
                    <LoaderSkeleton
                      className="w-20 inline-block"
                      isLoading={invoice === null}
                    >
                      <Typography type="heading-s" className="">
                        £ {parseInt(item?.total).toFixed(2)}
                      </Typography>
                    </LoaderSkeleton>
                  </div>
                ))}
              </div>

              <div className="flex flex-row justify-between p-6 bg-sidebar rounded-b-[8px]">
                <LoaderSkeleton
                  className="w-32 inline-block"
                  isLoading={invoice === null}
                >
                  <Typography
                    type="body-variant"
                    className="text-popover block"
                  >
                    Grand Total
                  </Typography>
                </LoaderSkeleton>

                <LoaderSkeleton
                  className="w-32 inline-block"
                  isLoading={invoice === null}
                >
                  <Typography type="heading-m" className="text-popover block">
                    £ {parseInt(invoice?.total).toFixed(2)}
                  </Typography>
                </LoaderSkeleton>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InvoicePage;
