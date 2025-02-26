'use client';
import React, { Fragment } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Typography } from '@/components/ui/typography';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '../schema/edit';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import InvoiceCalendar from './invoice-calendar';
import { InvoiceItemsEdit } from './invoice-items-edit';

const InvoiceEdit = ({ invoice, children }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: 'all',

    defaultValues: {
      clientName: invoice?.clientName ?? '',
      clientEmail: invoice?.clientEmail ?? '',
      paymentDue: invoice?.paymentDue ?? '2021-08-19',
      description: invoice?.description ?? '',
      paymentTerms: invoice?.paymentTerms ?? 'net-1',
      senderAddress: invoice?.senderAddress ?? {
        street: '',
        city: '',
        postCode: '',
        country: '',
      },
      clientAddress: invoice?.clientAddress ?? {
        street: '',
        city: '',
        postCode: '',
        country: '',
      },
      items: invoice?.items ?? [],
    },
  });

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        hideCloseButton={true}
        side="left"
        className="w-full !max-w-[616px] p-14 bg-popover"
      >
        <ScrollArea className="h-full max-w-[616px] pr-2">
          <SheetHeader>
            <SheetTitle>
              <Typography type="heading-m" className="text-start">
                Edit <span className="text-color-06">#</span>
                {invoice?.id}
              </Typography>
            </SheetTitle>
          </SheetHeader>
          <div className="">
            <div className="flex flex-col gap-6 mt-10">
              <Form {...form}>
                <form>
                  {/* BILL FROM */}
                  <Typography
                    type="heading-s"
                    className="text-color-01 font-bold mb-6"
                  >
                    Bill From
                  </Typography>
                  <FormField
                    control={form.control}
                    name="senderAddress.street"
                    render={({ field, fieldState: { error } }) => (
                      <FormItem>
                        <FormLabel
                          className={cn('flex justify-between pr-6', {
                            'border-color-09': error,
                          })}
                        >
                          <span
                            className={cn('inline-block text-inherit', {
                              'text-color-09': error,
                            })}
                          >
                            Street Address
                          </span>
                          <FormMessage />
                        </FormLabel>

                        <FormControl>
                          <Input
                            className={cn(error && 'border-color-09')}
                            placeholder="Street Address"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 min-[458px]:grid-cols-3 gap-6 mt-6">
                    <FormField
                      control={form.control}
                      name="senderAddress.city"
                      render={({ field, fieldState: { error } }) => (
                        <FormItem>
                          <FormLabel
                            className={cn('flex justify-between pr-6', {
                              'border-color-09': error,
                            })}
                          >
                            <span
                              className={cn('inline-block text-inherit', {
                                'text-color-09': error,
                              })}
                            >
                              City
                            </span>
                            <FormMessage />
                          </FormLabel>

                          <FormControl>
                            <Input
                              className={cn(error && 'border-color-09')}
                              placeholder="City"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="senderAddress.postCode"
                      render={({ field, fieldState: { error } }) => (
                        <FormItem>
                          <FormLabel
                            className={cn('flex justify-between pr-6', {
                              'border-color-09': error,
                            })}
                          >
                            <span
                              className={cn('inline-block text-inherit', {
                                'text-color-09': error,
                              })}
                            >
                              Post Code
                            </span>
                            <FormMessage />
                          </FormLabel>

                          <FormControl>
                            <Input
                              className={cn(error && 'border-color-09')}
                              placeholder="Post Code"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="senderAddress.country"
                      render={({ field, fieldState: { error } }) => (
                        <FormItem className="col-span-2 min-[458px]:col-span-1">
                          <FormLabel
                            className={cn('flex justify-between pr-6', {
                              'border-color-09': error,
                            })}
                          >
                            <span
                              className={cn('inline-block text-inherit', {
                                'text-color-09': error,
                              })}
                            >
                              Country
                            </span>
                            <FormMessage />
                          </FormLabel>

                          <FormControl>
                            <Input
                              className={cn(error && 'border-color-09')}
                              placeholder="Country"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  {/* BILL TO */}
                  <Typography
                    type="heading-s"
                    className="text-color-01 font-bold mb-6 mt-10"
                  >
                    Bill To
                  </Typography>
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="clientName"
                      render={({ field, fieldState: { error } }) => (
                        <FormItem>
                          <FormLabel
                            className={cn('flex justify-between pr-6', {
                              'border-color-09': error,
                            })}
                          >
                            <span
                              className={cn('inline-block text-inherit', {
                                'text-color-09': error,
                              })}
                            >
                              Client's Name
                            </span>
                            <FormMessage />
                          </FormLabel>

                          <FormControl>
                            <Input
                              className={cn(error && 'border-color-09')}
                              placeholder="Client Name"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="clientEmail"
                      render={({ field, fieldState: { error } }) => (
                        <FormItem>
                          <FormLabel
                            className={cn('flex justify-between pr-6', {
                              'border-color-09': error,
                            })}
                          >
                            <span
                              className={cn('inline-block text-inherit', {
                                'text-color-09': error,
                              })}
                            >
                              Client's Email
                            </span>
                            <FormMessage />
                          </FormLabel>

                          <FormControl>
                            <Input
                              className={cn(error && 'border-color-09')}
                              placeholder="Client Email"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="clientAddress.street"
                      render={({ field, fieldState: { error } }) => (
                        <FormItem>
                          <FormLabel
                            className={cn('flex justify-between pr-6', {
                              'border-color-09': error,
                            })}
                          >
                            <span
                              className={cn('inline-block text-inherit', {
                                'text-color-09': error,
                              })}
                            >
                              Street Address
                            </span>
                            <FormMessage />
                          </FormLabel>

                          <FormControl>
                            <Input
                              className={cn(error && 'border-color-09')}
                              placeholder="Street Address"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-2 min-[458px]:grid-cols-3 gap-6 mt-6">
                    <FormField
                      control={form.control}
                      name="clientAddress.city"
                      render={({ field, fieldState: { error } }) => (
                        <FormItem>
                          <FormLabel
                            className={cn('flex justify-between pr-6', {
                              'border-color-09': error,
                            })}
                          >
                            <span
                              className={cn('inline-block text-inherit', {
                                'text-color-09': error,
                              })}
                            >
                              City
                            </span>
                            <FormMessage />
                          </FormLabel>

                          <FormControl>
                            <Input
                              className={cn(error && 'border-color-09')}
                              placeholder="City"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="clientAddress.postCode"
                      render={({ field, fieldState: { error } }) => (
                        <FormItem>
                          <FormLabel
                            className={cn('flex justify-between pr-6', {
                              'border-color-09': error,
                            })}
                          >
                            <span
                              className={cn('inline-block text-inherit', {
                                'text-color-09': error,
                              })}
                            >
                              Post Code
                            </span>
                            <FormMessage />
                          </FormLabel>

                          <FormControl>
                            <Input
                              className={cn(error && 'border-color-09')}
                              placeholder="Post Code"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="clientAddress.country"
                      render={({ field, fieldState: { error } }) => (
                        <FormItem className="col-span-2 min-[458px]:col-span-1">
                          <FormLabel
                            className={cn('flex justify-between pr-6', {
                              'border-color-09': error,
                            })}
                          >
                            <span
                              className={cn('inline-block text-inherit', {
                                'text-color-09': error,
                              })}
                            >
                              Country
                            </span>
                            <FormMessage />
                          </FormLabel>

                          <FormControl>
                            <Input
                              className={cn(error && 'border-color-09')}
                              placeholder="Country"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  {/* Invoice */}
                  <div className="space-y-6 mt-10">
                    <div className="grid grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="paymentDue"
                        render={({ field, fieldState: { error } }) => (
                          <FormItem>
                            <FormLabel
                              className={cn('flex justify-between pr-6', {
                                'border-color-09': error,
                              })}
                            >
                              <span
                                className={cn('inline-block text-inherit', {
                                  'text-color-09': error,
                                })}
                              >
                                Invoice Date
                              </span>
                              <FormMessage />
                            </FormLabel>

                            <FormControl>
                              <InvoiceCalendar
                                field={field}
                                className={
                                  error ? '!border-color-09 text-color-09' : ''
                                }
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="paymentTerms"
                        render={({ field, fieldState: { error } }) => (
                          <FormItem>
                            <FormLabel
                              className={cn('flex justify-between pr-6', {
                                'border-color-09': error,
                              })}
                            >
                              <span
                                className={cn('inline-block text-inherit', {
                                  'text-color-09': error,
                                })}
                              >
                                Payment Terms
                              </span>
                              <FormMessage />
                            </FormLabel>

                            <FormControl>
                              <Select onValueChange={field.onChange}>
                                <SelectTrigger defaultValue="net-1">
                                  <SelectValue placeholder="Net 1 Day" />
                                </SelectTrigger>
                                <SelectContent
                                  style={{
                                    width: 'var(--radix-select-trigger-width)',
                                  }}
                                  sideOffset={24}
                                >
                                  {[
                                    'Net 1 Day',
                                    'Net 7 Days',
                                    'Net 14 Days',
                                    'Net 30 Days',
                                  ].map((item, index) => (
                                    <Fragment key={item}>
                                      {index > 0 ? <SelectSeparator /> : null}
                                      <SelectItem value={item}>
                                        {item}
                                      </SelectItem>
                                    </Fragment>
                                  ))}
                                </SelectContent>
                              </Select>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field, fieldState: { error } }) => (
                        <FormItem>
                          <FormLabel
                            className={cn('flex justify-between pr-6', {
                              'border-color-09': error,
                            })}
                          >
                            <span
                              className={cn('inline-block text-inherit', {
                                'text-color-09': error,
                              })}
                            >
                              Project Description
                            </span>
                            <FormMessage />
                          </FormLabel>

                          <FormControl>
                            <Input
                              className={cn(error && 'border-color-09')}
                              placeholder="Project Description"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <InvoiceItemsEdit
                    watch={form.watch}
                    register={form.register}
                    control={form.control}
                    items={invoice?.items}
                  />
                </form>
              </Form>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default InvoiceEdit;
