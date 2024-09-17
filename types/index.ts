import { homeFormSchema } from '@/validation';
import { z } from 'zod';

export type FiltersType = Partial<{
  city: string;
  smallCount: number;
  largeCount: number;
  startDate: Date;
  endDate: Date;
}>;

export type HomeFormType = z.infer<typeof homeFormSchema>;
