import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Entry } from '../../types';
import { fetchEntries } from '../../api';

interface EntriesState {
  entries: Entry[];
}

const initialState: EntriesState = {
  entries: [],
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
        state.entries = action.payload;
      });
  },
});

export const refresh = createAsyncThunk('entries/refresh', async () => {
  const entries = await fetchEntries();
  return entries;
});

export default entriesSlice.reducer;
