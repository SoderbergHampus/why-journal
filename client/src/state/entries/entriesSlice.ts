import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Entry } from '../../types';
import { fetchEntries } from '../../api';

interface EntriesState {
  values: Entry[];
}

const initialState: EntriesState = {
  values: [],
};

const entriesSlice = createSlice({
  name: 'entries',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(refresh.pending, () => {
        console.log('Fetch of entries pending...');
      })
      .addCase(refresh.fulfilled, (state, action: PayloadAction<Entry[]>) => {
        console.log('Fetch of entries complete!');
        state.values = action.payload;
      });
  },
});

export const refresh = createAsyncThunk(
  'entries/refresh',
  async (): Promise<Entry[]> => {
    const entries = await fetchEntries();
    return entries;
  }
);

export default entriesSlice.reducer;
