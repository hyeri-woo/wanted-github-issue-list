import issueSlice from './issueSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/es/storage/session';

const reducers = combineReducers({
  issues: issueSlice,
});

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  whitelist: ['issues'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
