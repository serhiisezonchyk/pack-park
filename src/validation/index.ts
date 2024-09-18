import { z } from 'zod';

export const homeFormSchema = z.object({
  small: z.number(),
  city: z.string().optional(),
  startDate: z.date(),
});
