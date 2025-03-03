'use client';
import React, { Fragment, useContext, useRef } from 'react';
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
import { Button } from '@/components/ui/button';
import { InvoiceContext } from '@/context/invoice-context';

const InvoiceCreate = ({ invoice, children }) => {
  const { addInvoice } = useContext(InvoiceContext);
  const sheetTriggerRef = useRef();
  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: 'all',

    defaultValues: {
      id: invoice?.id,
      clientName: invoice?.clientName ?? '',
      clientEmail: invoice?.clientEmail ?? '',
      paymentDue: invoice?.paymentDue ?? '2021-08-19',
      description: invoice?.description ?? '',
      paymentTerms: invoice?.paymentTerms ?? 1,
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
      total: invoice?.total ?? 1.0,
      status: invoice?.status ?? 'pending',
    },
  });

  const handleDraft = () => {
    const currentData = form.getValues();
    const draftData = {
      ...currentData,
      status: 'draft',
    };
    addInvoice(draftData);
    form.reset();
  };

  const onSubmit = (data) => {
    console.log('Submitted Data:', data);
    addInvoice(data);
    form.reset();
    setTimeout(() => {
      sheetTriggerRef.current.click();
    }, 500);
  };

  const handleCancel = () => {
    form.reset();
    sheetTriggerRef.current.click();
  };
  const onError = (errors) => console.log('Errors:', errors);

  return (
    <Sheet>
      <SheetTrigger ref={sheetTriggerRef} asChild>
        {children}
      </SheetTrigger>
      <SheetContent
        hideCloseButton={false}
        side="left"
        className="w-full !max-w-[616px] p-7 sm:p-14 pb-4 sm:pb-8 bg-popover"
      >
        <ScrollArea className="h-full max-w-[616px] pr-2">
          <SheetHeader>
            <SheetTitle>
              <Typography type="heading-m" className="text-start">
                New Invoice
              </Typography>
            </SheetTitle>
          </SheetHeader>
          <div className="">
            <div className="flex flex-col gap-6 mt-10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit, onError)}>
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
                          className={cn('flex justify-between pr-1 sm:pr-6', {
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
                        <FormItem className="col-span-2 min-[458px]:col-span-1">
                          <FormLabel
                            className={cn('flex justify-between pr-1 sm:pr-6', {
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
                        <FormItem className="col-span-2 min-[458px]:col-span-1">
                          <FormLabel
                            className={cn('flex justify-between pr-1 sm:pr-6', {
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
                            className={cn('flex justify-between pr-1 sm:pr-6', {
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
                            className={cn('flex justify-between pr-1 sm:pr-6', {
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
                            className={cn('flex justify-between pr-1 sm:pr-6', {
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
                            className={cn('flex justify-between pr-1 sm:pr-6', {
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
                        <FormItem className="col-span-2 min-[458px]:col-span-1">
                          <FormLabel
                            className={cn('flex justify-between pr-1 sm:pr-6', {
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
                        <FormItem className="col-span-2 min-[458px]:col-span-1">
                          <FormLabel
                            className={cn('flex justify-between pr-1 sm:pr-6', {
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
                            className={cn('flex justify-between pr-1 sm:pr-6', {
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="paymentDue"
                        render={({ field, fieldState: { error } }) => (
                          <FormItem>
                            <FormLabel
                              className={cn(
                                'flex justify-between pr-1 sm:pr-6',
                                {
                                  'border-color-09': error,
                                }
                              )}
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
                              className={cn(
                                'flex justify-between pr-1 sm:pr-6',
                                {
                                  'border-color-09': error,
                                }
                              )}
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
                                <SelectTrigger defaultValue={field.value}>
                                  <SelectValue placeholder="Net 1 Day" />
                                </SelectTrigger>
                                <SelectContent
                                  style={{
                                    width: 'var(--radix-select-trigger-width)',
                                  }}
                                  sideOffset={24}
                                >
                                  {['1', '7', '14', '30'].map((item, index) => (
                                    <Fragment key={item}>
                                      {index > 0 ? <SelectSeparator /> : null}
                                      <SelectItem value={item}>
                                        Net {item} Day{item === 1 ? '' : 's'}
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
                            className={cn('flex justify-between pr-1 sm:pr-6', {
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
                  <div className="h-16"></div>

                  <div className="h-[110px] absolute inset-0 px-12 sm:px-14 pr-14 sm:pr-16 -left-14 -right-14 -bottom-8 top-auto flex justify-end items-center gap-2 bg-popover">
                    <Button
                      onClick={handleCancel}
                      variant="default"
                      className="h-auto p-4 sm:px-6 mr-auto"
                    >
                      <Typography
                        type="heading-s-variant"
                        className="text-color-06"
                      >
                        Discard
                      </Typography>
                    </Button>
                    <Button
                      type
                      variant="secondary"
                      className="w-fit h-auto p-4 sm:px-6"
                      onClick={handleDraft}
                    >
                      <Typography
                        type="heading-s-variant"
                        className="text-inherit"
                      >
                        Save as Draft
                      </Typography>
                    </Button>
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-fit h-auto p-4 sm:px-6"
                    >
                      <Typography
                        type="heading-s-variant"
                        className="text-inherit"
                      >
                        Save & Send
                      </Typography>
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default InvoiceCreate;
