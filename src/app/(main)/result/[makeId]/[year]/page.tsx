import React, { FC, lazy, Suspense } from 'react';
import vehicleService from '~/services/vehicle';
import Preloader from '~/components/preloader/Preloader';
import { ResultPageParams } from '~/types/pages/result-page.types';
import { ServiceResponse } from '~/types/common.types';
import { getYearsArray } from '~/utils/helpers';

const ResultPageContent = lazy(
  () => import('~/app/(main)/result/[makeId]/[year]/ResultPageContent')
);
const ResultPageError = lazy(() => import('~/app/(main)/result/[makeId]/[year]/ResultPageError'));

export const dynamicParams = true;
export const revalidate = 3600;

export async function generateStaticParams() {
  const makes = await vehicleService.getMakes();
  if (!makes.success) {
    console.error('failed to fetch makes for static paths');
    return [];
  }

  const years = getYearsArray();

  return makes.data!.flatMap((make) =>
    years.map((year) => ({
      makeId: make.MakeId.toString(),
      year: year.toString()
    }))
  );
}

interface ResultPageProps {
  params: ResultPageParams;
}

const ResultPage: FC<ResultPageProps> = async ({ params }) => {
  try {
    const { makeId, year } = await params;
    const response = await vehicleService.getVehicles(makeId, year);
    if (!response.success) throw new Error(response.message!);

    return (
      <Suspense fallback={<Preloader />}>
        <ResultPageContent vehicles={response.data!} />
      </Suspense>
    );
  } catch (err) {
    return (
      <Suspense fallback={<Preloader />}>
        <ResultPageError errorMessage={(err as ServiceResponse).message!} />
      </Suspense>
    );
  }
};

export default ResultPage;
