'use client';

import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations('NotFoundPage');
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-background'>
      <h1 className='text-4xl font-bold mb-4 text-primary'>
        404 - {t('title')}
      </h1>
      <p className='text-lg mb-8 text-muted-foreground'>{t('description')}</p>
      <Button asChild>
        <Link href='/'>{t('button')}</Link>
      </Button>
    </div>
  );
}
