'use client';

import React, { useEffect } from 'react';
import { errors } from '~/constants/errors';
import LinkButton from '~/components/link-button/LinkButton';
import { routes } from '~/constants/routes';
import { useSnackbarContext } from '~/context/snackbar-context';

const ResultPageError = ({ errorMessage }: { errorMessage: string }) => {
  const { setAlert } = useSnackbarContext();

  useEffect(() => {
    setAlert(errorMessage);
  }, []);

  return (
    <div className='flex flex-col items-center gap-3.5'>
      <p>{errors.renderError}</p>
      <LinkButton href={routes.filter}>{'<'} Back</LinkButton>
    </div>
  );
};

export default ResultPageError;
