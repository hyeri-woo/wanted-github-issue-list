import issueSlice from './issueSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    issues: issueSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
