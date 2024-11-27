'use client';

import React, { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import Snackbar from '~/components/snackbar/Snackbar';
import { errors } from '~/constants/errors';

interface SnackbarContextInterface {
  setAlert: (message: string) => void;
}

const SnackbarContext = createContext<SnackbarContextInterface>({} as SnackbarContextInterface);

export default function SnackbarContextProvider({ children }: { children: ReactNode }) {
  const [isShown, setIsShown] = useState(false);
  const [message, setMessage] = useState('');
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const duration = 5000;

  const startTimer = () =>
    setTimeout(() => {
      setIsShown(false);
      setTimer(null);
    }, duration);

  const setAlert = useCallback(
    (message: string) => {
      setIsShown(true);
      setMessage(message);

      if (timer) clearTimeout(timer);

      setTimer(startTimer());
    },
    [timer]
  );

  const timerToggle = (active: boolean) => {
    if (timer) clearTimeout(timer);
    setTimer(active ? startTimer() : null);
  };

  const handleClose = () => setIsShown(false);

  const ctxValue = useMemo(() => ({ setAlert }), [setAlert]);

  return (
    <SnackbarContext.Provider value={ctxValue}>
      {isShown && (
        <Snackbar
          active={isShown}
          message={message || errors.main}
          onClose={handleClose}
          timerToggle={timerToggle}
        />
      )}
      {children}
    </SnackbarContext.Provider>
  );
}

export const useSnackbarContext = () => useContext(SnackbarContext);
