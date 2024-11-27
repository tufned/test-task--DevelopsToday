import React from 'react';
import { Vehicle } from '~/types/api/vehicle.interface';

const VehiclesList = ({ vehicles }: { vehicles: Vehicle[] }) => {
  return (
    <div className='flex flex-row flex-wrap justify-center items-center gap-3.5 w-full max-w-[85vw]'>
      {vehicles.map((vehicle, index) => (
        <div
          key={`${vehicle.Model_ID}-${index}`}
          className='rounded-xl bg-secondary w-40 min-h-fit py-2.5 px-3'
        >
          <p>{vehicle.Model_Name}</p>
        </div>
      ))}
    </div>
  );
};

export default VehiclesList;
