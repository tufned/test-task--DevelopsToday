export const URLs = {
  makes: '<https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json>',
  vehicle:
    '<https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json>\n'
} as const;
