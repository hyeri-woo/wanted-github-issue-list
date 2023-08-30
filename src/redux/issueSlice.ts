import { fetchGetIssue } from '../api/issue';
import { Issue } from '../types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface issueState {
  value: Issue[];
  count: number;
  loading: string;
}

// loding = 'idle' | 'pending' | 'succeeded' | 'failed'
const initialState: issueState = {
  value: [],
  count: 1,
  loading: 'idle',
};

const fetchIssues = createAsyncThunk('issues/get', async (page: number) => {
  const res = await fetchGetIssue(page);
  return res;
});

const issueSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchIssues.pending, (state: issueState) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchIssues.fulfilled, (state: issueState, action: PayloadAction<Issue[]>) => {
      state.value = [...(state.value || []), ...(action.payload || [])];
      state.count += 1;
      state.loading = 'succeeded';
    });
    builder.addCase(fetchIssues.rejected, (state: issueState) => {
      state.loading = 'failed';
    });
  },
});

export { fetchIssues };
export default issueSlice.reducer;
