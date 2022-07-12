import axios from 'axios';

const panintelligence = axios.create({
  baseURL: 'https://7302htasp6.execute-api.eu-west-1.amazonaws.com/v1',
});

export const getAirports = async () => {
  return await panintelligence.get('/airport');
};

export const getAirportById = async (id) => {
  return await panintelligence.get(`/airport/${id}`);
};

export const getAirportToAirport = async (from, to) => {
  return await panintelligence.get(`/airport/${from}/to/${to}`);
};
