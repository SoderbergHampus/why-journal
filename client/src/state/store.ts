import { configureStore } from '@reduxjs/toolkit';
import entriesReducer from './entries/entriesSlice';

export const store = configureStore({
  reducer: {
    entries: entriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;