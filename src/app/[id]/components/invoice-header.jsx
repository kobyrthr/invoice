import React, { useContext } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import { LoaderSkeleton } from '@/components/ui/loader-skeleton';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import InvoiceEdit from './invoice-edit';
import { InvoiceContext } from '@/context/invoice-context';
import InvoiceDelete from './invoice-delete';

const InvoiceHeader = ({ invoice }) => {
  const { deleteInvoice, markAsPaid } = useContext(InvoiceContext);

  return (
    <Card>
      <CardContent className="w-full h-[88px] flex flex-row justify-between">
        <div className="flex items-center w-full justify-between sm:justify-start gap-3 md:gap-5">
          <LoaderSkeleton
            className="inline-block w-10"
            isLoading={invoice === null}
          >
            <Typography asChild type="body-variant" className="text-color-06">
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
            <InvoiceEdit invoice={invoice}>
              <Button
                variant="default"
                className="min-h-fit leading-6 px-3 md:px-6 py-2 md:py-4"
              >
                Edit
              </Button>
            </InvoiceEdit>
          </LoaderSkeleton>

          <LoaderSkeleton
            className="inline-block w-20 h-10 rounded-full"
            isLoading={invoice === null}
          >
            <InvoiceDelete
              onDelete={() => {
                deleteInvoice(invoice.id);
              }}
              invoiceId={invoice?.id}
            >
              <Button
                variant="destructive"
                className="min-h-fit leading-6 px-3 md:px-6 py-2 md:py-4"
              >
                Delete
              </Button>
            </InvoiceDelete>
          </LoaderSkeleton>

          <LoaderSkeleton
            className="inline-block w-20 h-10 rounded-full"
            isLoading={invoice === null}
          >
            <Button
              variant="primary"
              disabled={invoice?.status === 'paid'}
              className="min-h-fit leading-6 px-3 md:px-6 py-2 md:py-4"
              onClick={() => {
                markAsPaid(invoice);
              }}
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
            <InvoiceEdit invoice={invoice}>
              <Button
                variant="default"
                className="min-h-fit leading-6 px-3 md:px-6 py-2 md:py-4"
              >
                Edit
              </Button>
            </InvoiceEdit>
          </LoaderSkeleton>

          <LoaderSkeleton
            className="inline-block w-20 h-10 rounded-full"
            isLoading={invoice === null}
          >
            <InvoiceDelete
              onDelete={() => {
                deleteInvoice(invoice.id);
              }}
              invoiceId={invoice?.id}
            >
              <Button
                variant="destructive"
                className="min-h-fit leading-6 px-3 md:px-6 py-2 md:py-4"
              >
                Delete
              </Button>
            </InvoiceDelete>
          </LoaderSkeleton>

          <LoaderSkeleton
            className="inline-block w-20 h-10 rounded-full"
            isLoading={invoice === null}
          >
            <Button
              variant="primary"
              disabled={invoice?.status === 'paid'}
              className="min-h-fit leading-6 px-3 md:px-6 py-2 md:py-4"
              onClick={() => {
                markAsPaid(invoice);
              }}
            >
              Mark as Paid
            </Button>
          </LoaderSkeleton>
        </div>
      </CardContent>
    </Card>
  );
};

export default InvoiceHeader;
