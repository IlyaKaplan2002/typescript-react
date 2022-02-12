import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { contactsSlice } from './contacts/contactsSlice';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  // reducer: {
  //   [contactsSlice.reducerPath]: contactsSlice.reducer,
  // },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsSlice.middleware,
  ],
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export default store;
