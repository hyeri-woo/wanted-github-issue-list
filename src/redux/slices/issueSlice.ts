import { fetchGetIssue } from '../../api/issue';
import { Issue } from '../../types';
import { IssueOptions } from './optionSlice';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface issueState {
  value: Issue[];
  page: number;
  loading: boolean;
  error: boolean;
}

// loding = 'idle' | 'pending' | 'succeeded' | 'failed'
const initialState: issueState = {
  value: [],
  page: 1,
  loading: true,
  error: false,
};

interface issueInfo extends IssueOptions {
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
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchIssues.fulfilled, (state: issueState, action: PayloadAction<Issue[]>) => {
      state.value = [...(state.value || []), ...(action.payload || [])];
      state.page += 1;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(fetchIssues.rejected, (state: issueState) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export { fetchIssues };
export default issueSlice.reducer;
