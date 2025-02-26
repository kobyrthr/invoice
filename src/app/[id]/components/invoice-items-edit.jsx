import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Typography } from '@/components/ui/typography';
import React from 'react';
import DeleteIcon from '@/../public/icon-delete.svg';
import Image from 'next/image';
import { useFieldArray, useWatch } from 'react-hook-form';

export const InvoiceItemsEdit = ({ watch, register, control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  const watchedItems = useWatch({ control, name: 'items' });

  // Calculate total dynamically
  const calculatedItems = watchedItems.map((item) => ({
    ...item,
    total: item.price * item.quantity || 0,
  }));

  return (
    <div className="py-6">
      <Typography
        type="heading-s"
        className="text-[18px] text-[hsla(225,14%,53%)]"
      >
        Item List
      </Typography>
      <div className="">
        <Table containerClassName="p-0">
          <TableHeader className=" !border-b-0">
            <TableRow className=" !border-b-0">
              <TableHead className="pl-0">
                <Typography type="body" className="text-color-06">
                  Item Name
                </Typography>
              </TableHead>
              <TableHead>
                <Typography type="body" className="text-color-06">
                  Qty.
                </Typography>
              </TableHead>
              <TableHead>
                <Typography type="body" className="text-color-06">
                  Price
                </Typography>
              </TableHead>
              <TableHead>
                <Typography type="body" className="text-color-06">
                  Total
                </Typography>
              </TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fields?.map((item, index) => {
              return (
                <TableRow key={item.id} className="!border-t-0 !border-b-0">
                  <TableCell className="pl-0">
                    <Input
                      type="text"
                      className="w-full py-4"
                      defaultValue={item?.name}
                      {...register(`items[${index}].name`)}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      className="w-12 text-center px-3 py-4"
                      defaultValue={item?.quantity}
                      {...register(`items[${index}].quantity`, {
                        valueAsNumber: true,
                      })}
                    />
                  </TableCell>
                  <TableCell className="w-28">
                    <Input
                      type="number"
                      className="w-full py-4"
                      defaultValue={item?.price}
                      step="any"
                      {...register(`items[${index}].price`, {
                        valueAsNumber: true,
                      })}
                    />
                  </TableCell>
                  <TableCell className="w-20 ">
                    <Typography
                      type="heading-s"
                      className="text-color-06 max-w-16 truncate"
                    >
                      {calculatedItems[index]?.total.toFixed(2)}
                    </Typography>
                  </TableCell>
                  <TableCell className="p-0 w-6 text-center">
                    <Button
                      onClick={() => {
                        remove(index);
                      }}
                      variant="default"
                      className="px-0 py-0"
                    >
                      <Image src={DeleteIcon} alt="Delete" />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter className="!border-t-0">
            <TableRow>
              <TableCell colSpan={5}>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    append({ name: 'Example', quantity: 1, price: 1 });
                  }}
                  variant="default"
                  className="w-full h-12 mt-4"
                >
                  <Typography type="heading-s" className="text-color-06">
                    + Add New Item
                  </Typography>
                </Button>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};
