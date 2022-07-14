import { getAirportToAirport } from './connection';
import { toast } from 'react-toastify';

export const handleSubmit = async (e, setData) => {
  e.preventDefault();

  const vehicle = e.target.vehicle.value;
  const distance = parseInt(e.target.distance.value);
  const from = e.target.from.value;
  const to = e.target.to.value;
  const travelers = parseInt(e.target.travelers.value);

  if (!vehicle || !distance || !from || !to || !travelers) return toast.error('Please fill in all fields');

  const FlightToData = await getAirportToAirport(from, to);
  const FlightFromData = await getAirportToAirport(to, from);
  const JourneyPrice = calculateJourneyCost(vehicle, distance, travelers);
  const constructedTo = FlightToData.data.journey.flatMap((item) => [item, '→']);
  const constructedFrom = FlightFromData.data.journey.flatMap((item) => [item, '→']);
  constructedTo.pop();
  constructedFrom.pop();

  let flightToMiles = FlightToData.data.miles[0];
  let flightFromMiles = FlightFromData.data.miles[0];

  if (FlightToData.data.miles.length > 1) {
    flightToMiles = FlightToData.data.miles.reduce((acc, curr) => {
      return acc + curr;
    });
  }
  if (FlightFromData.data.miles.length > 1) {
    flightFromMiles = FlightFromData.data.miles.reduce((acc, curr) => {
      return acc + curr;
    });
  }

  let flightToCost = `£${(flightToMiles * 0.1 * travelers).toFixed(2)}`;
  let flightFromCost = `£${(flightFromMiles * 0.1 * travelers).toFixed(2)}`;

  setData((prev) => {
    return {
      ...prev,
      input: {
        vehicle: vehicle,
        distance: distance,
        from: from,
        to: to,
        travelers: travelers,
      },
      flight: {
        to: FlightToData.data,
        from: FlightFromData.data,
      },
      constructed: {
        travel: JourneyPrice,
        to: {
          journey: constructedTo,
          cost: flightToCost,
        },
        from: {
          journey: constructedFrom,
          cost: flightFromCost,
        },
      },
    };
  });
};

const calculateJourneyCost = (vehicle, distance, travelers) => {
  let car = parseFloat(distance * 0.2 + 3) * Math.ceil(travelers / 4);
  let carFormatted = `£${car.toFixed(2)}`;
  let taxi = parseFloat(distance * 0.4) * Math.ceil(travelers / 4);
  let taxiFormatted = `£${taxi.toFixed(2)}`;

  return {
    selected: { vehicle: vehicle, cost: vehicle === 'CAR' ? carFormatted : taxiFormatted },
    suggested: { vehicle: car < taxi ? 'CAR' : 'TAXI', cost: car < taxi ? carFormatted : taxiFormatted },
  };
};
