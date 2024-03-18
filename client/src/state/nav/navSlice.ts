import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface NavState {
  value: 'newEntry' | 'results';
}

const initialState: NavState = { value: 'newEntry' };

const navSlice = createSlice({
  name: 'nav',
  initialState: initialState,
  reducers: {
    navSelect: (state, action: PayloadAction<'newEntry' | 'results'>) => {
      state.value = action.payload;
    },
  },
});

export const { navSelect } = navSlice.actions;

export default navSlice.reducer;
