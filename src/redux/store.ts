import issueSlice from './issueSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    issues: issueSlice,
  },
});

export default store;
