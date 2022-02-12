import { combineReducers } from 'redux';
import { contactsSlice } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterReducer';

const rootReducer = combineReducers({
  [contactsSlice.reducerPath]: contactsSlice.reducer,
  contactsFilter: filterReducer,
});

export default rootReducer;
