'use client';

import React, { useState } from 'react';
import '~/components/dropdown/dropdown.scss';
import usePreloader from '~/hooks/usePreloader';
import { errors } from '~/constants/errors';
import { ServiceResponse } from '~/types/common.types';
import { useSnackbarContext } from '~/context/snackbar-context';

interface Option {
  title: string;
  id?: string;
}

interface DropdownProps<T> {
  label: string;
  placeholder?: string;
  service?: () => Promise<ServiceResponse<T[]>>;
  staticOptions?: string[];
  mapServiceData?: (responseOption: T) => Option;
  optionClickCallback: (option: Option) => void;
}

const Dropdown = <T = unknown,>({
  label,
  placeholder = `Choose ${label}`,
  service,
  staticOptions,
  mapServiceData,
  optionClickCallback
}: DropdownProps<T>) => {
  const { isLoading, loading, preloader } = usePreloader(false);
  const { setAlert } = useSnackbarContext();
  const [selectedOption, setSelectedOption] = useState<Option | null>();
  const [options, setOptions] = useState<Option[] | null>(null);

  const [hidden, setHidden] = useState(true);
  const toggleOptions = (bool?: boolean) => {
    setHidden((prev) => bool || !prev);
  };

  const handleSelectClick = async () => {
    loading.start();
    toggleOptions();
    const cookedOptions = await getCookedOptions();
    setOptions(cookedOptions);
    loading.stop();
  };

  const getCookedOptions = async (): Promise<Option[] | null> => {
    if (service) return await cookServiceOptions();
    else if (staticOptions) return cookStaticOptions();
    else {
      setAlert('service or staticOptions should be passed');
      return null;
    }
  };

  const cookStaticOptions = () => {
    if (!staticOptions) {
      setAlert('staticOptions param required');
      return null;
    }
    return staticOptions.map((opt) => ({
      title: opt
    }));
  };

  const cookServiceOptions = async () => {
    if (!service || !mapServiceData) {
      setAlert('service and mapServiceData param required');
      return null;
    }

    const response = await service();
    if (!response.success) return null;

    return response.data!.map((responseOption) => {
      return mapServiceData(responseOption);
    });
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    toggleOptions(false);
    optionClickCallback(option);
  };

  return (
    <div className='w-44 relative'>
      <h3 className='text-lg'>{label}</h3>
      <div
        onClick={handleSelectClick}
        className='border border-dark flex-center h-10 w-full rounded-lg px-2 cursor-pointer'
      >
        <div className={selectedOption ? '' : 'text-gray-500'}>
          {selectedOption?.title ?? placeholder}
        </div>
      </div>
      {!hidden && (
        <div className='absolute top-full w-full rounded-lg max-h-80 z-10 overflow-y-auto'>
          {isLoading ? (
            <div className='dropdown-option'>{preloader}</div>
          ) : options ? (
            options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleOptionClick(option)}
                className='dropdown-option with-hover'
              >
                {option.title}
              </div>
            ))
          ) : (
            <div className='dropdown-option'>{errors.main}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
