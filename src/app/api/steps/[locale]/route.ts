import { steps } from '@/lib/consts';
import { LocaleType } from '@/types';
import { NextRequest, NextResponse } from 'next/server';

export const getSteps = (locale: LocaleType) => {
  return steps[locale];
};
export const GET = async (
  req: NextRequest,
  { params }: { params: { locale: LocaleType} }
) => {
  const { locale } = params;
  try {
    const categories = getSteps(locale);
    return new NextResponse(JSON.stringify(categories), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong.' }),
      {
        status: 500,
      }
    );
  }
};
