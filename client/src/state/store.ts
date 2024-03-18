import { configureStore } from '@reduxjs/toolkit';
import entriesReducer from './entries/entriesSlice';
import navReducer from './nav/navSlice';

export const store = configureStore({
  reducer: {
    entries: entriesReducer,
    navSelect: navReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
