'use client';

import React, { lazy } from 'react';
import { Vehicle } from '~/types/api/vehicle.interface';
import { useParams } from 'next/navigation';
import { ResultPageParams } from '~/types/pages/result-page.types';
import LinkButton from '~/components/link-button/LinkButton';
import { routes } from '~/constants/routes';

const VehiclesList = lazy(() => import('~/components/vehicles-list/VehiclesList'));

const ResultPageContent = ({ vehicles }: { vehicles: Vehicle[] }) => {
  const params = useParams<ResultPageParams>();
  return (
    <div className='w-full p-4 flex flex-col items-center'>
      <div className='w-full pb-3 flex justify-start'>
        <LinkButton href={routes.filter}>{'<'} Back</LinkButton>
      </div>
      <div className='w-fit h-fit'>
        <div className='flex gap-2.5'>
          <p>Year:</p>
          <span>{params.year}</span>
        </div>
        <div className='flex gap-2.5'>
          <p>Make:</p>
          <span>{vehicles[0].Make_Name}</span>
        </div>
        <div>
          <h1 className='text-xl font-semibold w-fit my-5'>Available Models:</h1>
          <VehiclesList vehicles={vehicles} />
        </div>
      </div>
    </div>
  );
};

export default ResultPageContent;
