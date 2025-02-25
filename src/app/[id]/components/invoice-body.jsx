import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LoaderSkeleton } from '@/components/ui/loader-skeleton';
import { Typography } from '@/components/ui/typography';
import InvoiceCalculator from './invoice-calculator';

const InvoiceBody = ({ invoice }) => {
  return (
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
              <Typography asChild type="body-variant" className="text-color-06">
                <span>{invoice?.description}</span>
              </Typography>
            </LoaderSkeleton>
          </div>

          <div className="flex flex-col gap-1 sm:items-end min-w-20">
            <LoaderSkeleton className="h-3 w-28" isLoading={invoice === null}>
              <Typography type="body-variant" className="text-color-06">
                {invoice?.senderAddress?.street}
              </Typography>
            </LoaderSkeleton>
            <LoaderSkeleton className="h-3 w-20" isLoading={invoice === null}>
              <Typography type="body-variant" className="text-color-06">
                {invoice?.senderAddress?.city}
              </Typography>
            </LoaderSkeleton>
            <LoaderSkeleton className="h-3 w-16" isLoading={invoice === null}>
              <Typography type="body-variant" className="text-color-06">
                {invoice?.senderAddress?.postCode}
              </Typography>
            </LoaderSkeleton>
            <LoaderSkeleton className="h-3 w-24" isLoading={invoice === null}>
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

            <LoaderSkeleton className="w-20 mt-6" isLoading={invoice === null}>
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
            <LoaderSkeleton className="w-24 mt-2" isLoading={invoice === null}>
              <Typography type="heading-s" className="leading-[20px] mt-2">
                {invoice?.clientName}
              </Typography>
            </LoaderSkeleton>

            <LoaderSkeleton className="w-24 mt-2" isLoading={invoice === null}>
              <Typography
                type="body-variant"
                className="leading-[20px] text-color-06 mt-2"
              >
                {invoice?.clientAddress?.street}
              </Typography>
            </LoaderSkeleton>
            <LoaderSkeleton className="w-24 mt-1" isLoading={invoice === null}>
              <Typography
                type="body-variant"
                className="leading-[20px] text-color-06"
              >
                {invoice?.clientAddress?.city}
              </Typography>
            </LoaderSkeleton>
            <LoaderSkeleton className="w-24 mt-1" isLoading={invoice === null}>
              <Typography
                type="body-variant"
                className="leading-[20px] text-color-06"
              >
                {invoice?.clientAddress?.postCode}
              </Typography>
            </LoaderSkeleton>
            <LoaderSkeleton className="w-24 mt-1" isLoading={invoice === null}>
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

        <InvoiceCalculator invoice={invoice} />
      </CardContent>
    </Card>
  );
};

export default InvoiceBody;
