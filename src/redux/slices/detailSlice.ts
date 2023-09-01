import { fetchGetIssueDetail } from '../../api/issue';
import { Issue } from '../../types';
import { IssueOptions } from './optionSlice';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface issueState {
  value: Issue;
  loading: boolean;
  error: boolean;
}

const initialState: issueState = {
  value: {} as Issue,
  loading: true,
  error: false,
};

interface issueInfo extends IssueOptions {
  number: string;
}

const fetchIssueDetail = createAsyncThunk(
  'issue-detail/get',
  async ({ organization, repository, number }: issueInfo) => {
    const res = await fetchGetIssueDetail(organization, repository, number);
    return res;
  },
);

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchIssueDetail.pending, (state: issueState) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(
      fetchIssueDetail.fulfilled,
      (state: issueState, action: PayloadAction<Issue>) => {
        state.value = action.payload;
        state.loading = false;
        state.error = false;
      },
    );
    builder.addCase(fetchIssueDetail.rejected, (state: issueState) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export { fetchIssueDetail };
export default detailSlice.reducer;
