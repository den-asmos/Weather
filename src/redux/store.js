import { configureStore } from '@reduxjs/toolkit';
import { weatherApi } from './weather.api';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import citySlice from './city.slice';

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    city: citySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

setupListeners(store.dispatch);
