import { Issue } from '../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type issueState = {
  value: Issue[];
};

const initialState: issueState = {
  value: [],
};

const issueSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    extend: (state, action: PayloadAction<Issue[]>) => {
      state.value = [...(state.value || []), ...(action.payload || [])];
    },
  },
});

export const { extend } = issueSlice.actions;
export default issueSlice.reducer;
