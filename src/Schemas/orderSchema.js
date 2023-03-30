import { z } from 'zod';

export const orderSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required.',
    })
    .min(1, 'Required'),
  country: z
    .string({
      required_error: 'Country is required.',
    })
    .min(1, 'Required'),
  state: z
    .string({
      required_error: 'State is required.',
    })
    .min(1, 'Required'),
  city: z.string().min(1, 'Required'),
  zip: z.string().min(1, 'Required'),
  address1: z
    .string({
      required_error: 'Address is required.',
    })
    .min(1, 'Required'),
  address2: z.string().nullable(),
  // status: z.enum(['paid', 'unpaid']),
});