import { createSlice } from '@reduxjs/toolkit';

export interface IssueOptions {
  organization: string;
  repository: string;
}

const initialState: IssueOptions = {
  organization: 'facebook',
  repository: 'react',
};

const optionSlice = createSlice({
  name: 'issueOption',
  initialState,
  reducers: {},
});

export default optionSlice.reducer;
