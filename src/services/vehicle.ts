import api from '~/lib/axios-facade';
import { ServiceResponse } from '~/types/common.types';
import { VehicleMake } from '~/types/api/vehicle-make.interface';
import { errors } from '~/constants/errors';

const vehicleService = {
  getMakes: async (): Promise<ServiceResponse<VehicleMake[]>> => {
    try {
      const response = await api.get('/GetMakesForVehicleType/car', {
        params: {
          format: 'json'
        }
      });
      return {
        success: true,
        data: response.data.Results
      };
    } catch (err) {
      console.error(err);
      return {
        success: false,
        message: err instanceof Error ? err.message : errors.badRequest
      };
    }
  }
};
export default vehicleService;
