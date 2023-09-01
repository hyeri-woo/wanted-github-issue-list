import detailSlice from './slices/detailSlice';
import issueSlice from './slices/issueSlice';
import optionSlice from './slices/optionSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    issues: issueSlice,
    detail: detailSlice,
    option: optionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
