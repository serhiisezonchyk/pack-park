import { homeFormSchema } from '@/validation';
import { z } from 'zod';

export type LocaleType = 'en' | 'uk';
export type FiltersType = Partial<{
  city: string;
  smallCount: number;
  largeCount: number;
  startDate: Date;
  endDate: Date;
}>;

export interface CommentType {
  id: number;
  src: string;
  name: string;
  city: string;
  rate: number;
  comment: string;
}
export interface StepType {
  id: number;
  title: string;
  description: string;
  src: string;
}
export type HomeFormType = z.infer<typeof homeFormSchema>;
