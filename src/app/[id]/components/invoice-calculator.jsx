import React from 'react';
import { LoaderSkeleton } from '@/components/ui/loader-skeleton';
import { Typography } from '@/components/ui/typography';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const InvoiceCalculator = ({ invoice }) => {
  return (
    <div className="flex flex-col bg-color-07-base mt-12">
      <Table containerClassName="hidden sm:block">
        <TableHeader className="border-b-0">
          <TableRow className=" !border-b-0">
            <TableHead className="text-start ">
              <Typography type="body-variant" className="text-color-06">
                Item Name
              </Typography>
            </TableHead>
            <TableHead className="text-center">
              <Typography type="body-variant" className="text-color-06">
                QTY.
              </Typography>
            </TableHead>
            <TableHead className="text-center">
              <Typography type="body-variant" className="text-color-06">
                Price
              </Typography>
            </TableHead>
            <TableHead className="text-end">
              <Typography type="body-variant" className="text-color-06">
                Total
              </Typography>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {invoice?.items
            ? invoice?.items.map((item, index) => (
                <TableRow key={item.name + index} className="border-b-0">
                  <TableCell className="font-medium w-[45%]">
                    <Typography type="heading-s" className="">
                      {item?.name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      type="heading-s"
                      className="text-color-07 text-center"
                    >
                      {item?.quantity}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      type="heading-s"
                      className="text-color-07 text-center"
                    >
                      £ {parseInt(item?.price).toFixed(2)}
                    </Typography>
                  </TableCell>
                  <TableCell className="text-right">
                    <Typography type="heading-s" className="">
                      £ {parseFloat(item?.total).toFixed(2)}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))
            : [1, 2, 3].map((item) => (
                <TableRow key={item} className="border-b-0">
                  <TableCell>
                    <LoaderSkeleton
                      className="w-24"
                      isLoading={invoice === null}
                    ></LoaderSkeleton>
                  </TableCell>
                  <TableCell>
                    <LoaderSkeleton
                      className="w-24 mx-auto"
                      isLoading={invoice === null}
                    ></LoaderSkeleton>
                  </TableCell>
                  <TableCell>
                    <LoaderSkeleton
                      className="w-24 mx-auto"
                      isLoading={invoice === null}
                    ></LoaderSkeleton>
                  </TableCell>
                  <TableCell>
                    <LoaderSkeleton
                      className="w-24 ml-auto"
                      isLoading={invoice === null}
                    ></LoaderSkeleton>
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
      <div className="size-full flex flex-col p-6 sm:hidden">
        {invoice?.items.map((item, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center"
          >
            <div className="flex flex-col gap-1">
              <LoaderSkeleton className="w-20" isLoading={invoice === null}>
                <Typography asChild type="heading-s" className="">
                  <span>{item?.name}</span>
                </Typography>
              </LoaderSkeleton>
              <LoaderSkeleton className="w-24" isLoading={invoice === null}>
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
            asChild
            type="body-variant"
            className="text-popover block"
          >
            <span>
              <span className="block sm:hidden">Grand Total</span>
              <span className="hidden sm:block">Amount Due</span>
            </span>
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
  );
};

export default InvoiceCalculator;
