import React from 'react';
import '~/components/preloader/preloader.scss';

const Preloader = () => {
  return (
    <div className='size-full flex-center'>
      <div className='loader'></div>
    </div>
  );
};

export default Preloader;
