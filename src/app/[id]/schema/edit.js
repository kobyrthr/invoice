import { z } from 'zod';

const addressSchema = z.object({
  street: z.string().min(1, 'is required'),
  city: z.string().min(1, 'is required'),
  postCode: z.string().min(1, 'is required'),
  country: z.string().min(1, 'is required'),
});

export const formSchema = z.object({
  clientName: z.string().min(1, 'is required'),
  clientEmail: z.string().email('is invalid'),
  senderAddress: addressSchema,
  clientAddress: addressSchema,
  paymentDue: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'is invalid',
  }),
  paymentTerms: z.string().min(1, 'is required'),
  description: z.string().min(1, 'is required'),
});
