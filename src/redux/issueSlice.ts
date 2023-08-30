import { fetchGetIssue } from '../api/issue';
import { Issue } from '../types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface issueState {
  value: Issue[];
  loading: string;
}

// loding = 'idle' | 'pending' | 'succeeded' | 'failed'
const initialState: issueState = {
  value: [],
  loading: 'idle',
};

const fetchIssues = createAsyncThunk('issues/get', async () => {
  const res = await fetchGetIssue();
  return res;
});

const issueSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchIssues.fulfilled, (state: issueState, action: PayloadAction<Issue[]>) => {
      state.value = [...(state.value || []), ...(action.payload || [])];
    });
  },
});

export { fetchIssues };
export default issueSlice.reducer;
