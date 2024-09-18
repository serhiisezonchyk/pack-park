import { LocaleType } from '@/types';
import { format as formatDate, Locale } from 'date-fns';
import { uk, enUS } from 'date-fns/locale';
import { useLocale } from 'next-intl';

const locales: Record<string, Locale> = {
  uk,
  enUS,
};

export default function (date: Date, formatStr: string = 'PP') {
  const locale = useLocale();
  const selectedLocale = locales[locale] || enUS;
  return formatDate(date, formatStr, { locale: selectedLocale });
}

export const getLocale = (locale: LocaleType) => {
  switch (locale) {
    case 'uk': {
      return uk;
    }
    case 'en':
    default:
      return enUS;
  }
};
