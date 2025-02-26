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
import { useFieldArray } from 'react-hook-form';

export const InvoiceItemsEdit = ({ watch, register, control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

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
              const quantity = watch(`items.${index}.quantity`) || 0;
              const price = watch(`items.${index}.price`) || 0;

              const total = price * quantity;
              return (
                <TableRow key={item.id} className="!border-t-0 !border-b-0">
                  <TableCell className="pl-0">
                    <Input
                      {...register(`items.${index}.name`)}
                      type="text"
                      className="w-full py-4"
                      defaultValue={item?.name}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      {...register(`items.${index}.quantity`)}
                      type="number"
                      className="w-12 text-center px-3 py-4"
                      defaultValue={item?.quantity}
                    />
                  </TableCell>
                  <TableCell className="w-28">
                    <Input
                      {...register(`items.${index}.price`)}
                      type="number"
                      className="w-full py-4"
                      defaultValue={item?.price}
                    />
                  </TableCell>
                  <TableCell className="w-20 ">
                    <Typography
                      type="heading-s"
                      className="text-color-06 max-w-16 truncate"
                    >
                      {total.toFixed(2)}
                    </Typography>
                  </TableCell>
                  <TableCell className="p-0 w-6 text-center">
                    <Button
                      onClick={() => {
                        remove(index);
                      }}
                      variant="ghost"
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
                    append({ name: '', quantity: 1, price: 0 });
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
