'use client';

import React, { useState } from 'react';
import Dropdown from '~/components/dropdown/Dropdown';
import { routes } from '~/constants/routes';
import LinkButton from '~/components/link-button/LinkButton';
import vehicleService from '~/services/vehicle';
import { getYearsArray } from '~/utils/helpers';
import { VehicleMake } from '~/types/api/vehicle-make.interface';

interface FilterForm {
  makeId: string | null;
  year: number | null;
}

const FilterPage = () => {
  const [filterForm, setFilterForm] = useState<FilterForm>({
    makeId: null,
    year: null
  });
  const setFilterFormState = (key: keyof FilterForm, value: FilterForm[keyof FilterForm]) => {
    setFilterForm((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const getVehicleModelYears = () => {
    return getYearsArray().map((elem) => elem.toString());
  };

  return (
    <div>
      <div className='flex max-sm:flex-col justify-between items-center gap-2.5 mb-5'>
        <Dropdown<VehicleMake>
          label='Make'
          service={vehicleService.getMakes}
          mapServiceData={(responseOption) => ({
            title: responseOption.MakeName || '---',
            id: responseOption.MakeId.toString() || '---'
          })}
          optionClickCallback={(option) => setFilterFormState('makeId', option.id!)}
        />
        <Dropdown
          label='Model Year'
          staticOptions={getVehicleModelYears()}
          optionClickCallback={(option) => setFilterFormState('year', option.title)}
        />
      </div>
      <div className='flex justify-end items-center'>
        <LinkButton
          label='Next'
          href={`${routes.result}/${filterForm.makeId}/${filterForm.year}`}
          active={!!(filterForm.makeId && filterForm.year)}
        />
      </div>
    </div>
  );
};

export default FilterPage;
