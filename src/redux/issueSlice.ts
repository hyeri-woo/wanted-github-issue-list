import { fetchGetIssue } from '../api/issue';
import { Issue } from '../types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface issueState {
  organization: string;
  repository: string;
  value: Issue[];
  page: number;
  loading: string;
}

// loding = 'idle' | 'pending' | 'succeeded' | 'failed'
const initialState: issueState = {
  organization: 'facebook',
  repository: 'react',
  value: [],
  page: 1,
  loading: 'idle',
};

export interface issueInfo {
  organization: string;
  repository: string;
  page: number;
}

const fetchIssues = createAsyncThunk(
  'issues/get',
  async ({ organization, repository, page }: issueInfo) => {
    const res = await fetchGetIssue(organization, repository, page);
    return res;
  },
);

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
      state.page += 1;
      state.loading = 'succeeded';
    });
    builder.addCase(fetchIssues.rejected, (state: issueState) => {
      state.loading = 'failed';
    });
  },
});

export { fetchIssues };
export default issueSlice.reducer;
