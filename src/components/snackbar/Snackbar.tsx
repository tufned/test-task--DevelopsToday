'use client';

import React, { FC } from 'react';

interface SnackbarProps {
  active: boolean;
  message: string;
  onClose: () => void;
  timerToggle?: (active: boolean) => void;
}

const Snackbar: FC<SnackbarProps> = ({ active, message, onClose, timerToggle }) => {
  return (
    <div
      className={`fixed top-0 left-0 -translate-y-full transition-all duration-300 ease-in-out flex justify-center pt-3 w-full z-50 pointer-events-none ${active ? 'translate-y-0' : ''}`}
      onClick={onClose}
      onMouseEnter={() => timerToggle && timerToggle(false)}
      onMouseLeave={() => timerToggle && timerToggle(true)}
    >
      <div className='cursor-n-resize min-w-[180px] max-w-[600px] min-h-[35px] rounded-xl bg-error shadow-[0_15px_20px_0_rgba(0,0,0,0.1)] flex justify-center items-center pointer-events-auto p-2.5'>
        <p className='text-center pointer-events-none text-base text-white'>{message}</p>
      </div>
    </div>
  );
};

export default Snackbar;
