import React, { useState } from 'react';
import Preloader from '~/components/preloader/Preloader';

interface UsePreloaderOutput {
  isLoading: boolean;
  preloader: React.ReactElement;
  loading: {
    stop: () => void;
    start: () => void;
  };
}

const usePreloader = (initialState: boolean = true): UsePreloaderOutput => {
  const [isLoading, setIsLoading] = useState(initialState);
  const loading = {
    start: () => setIsLoading(true),
    stop: () => setIsLoading(false)
  };
  const preloader = <Preloader />;

  return { isLoading, loading, preloader };
};

export default usePreloader;
