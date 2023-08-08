import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY } from '../utils/constants';

export const weatherApi = createApi({
  reducerPath: 'weather/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5',
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    getWeather: build.query({
      query: (city = 'London') => ({
        url: `weather?q=${city}&units=metric&appid=${API_KEY}`,
      }),
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
