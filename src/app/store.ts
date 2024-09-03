import { configureStore } from '@reduxjs/toolkit';
import squareReducer from '../features/squareSlice';

export const store = configureStore({
  reducer: {
    squares: squareReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;