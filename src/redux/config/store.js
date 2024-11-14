import { configureStore } from '@reduxjs/toolkit';
import textReducer from '../silces/TextSlies';

const store = configureStore({
  reducer: {
    textReducer,
  },
});

export default store;
