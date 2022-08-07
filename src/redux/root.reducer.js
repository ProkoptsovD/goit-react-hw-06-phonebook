import { combineReducers } from '@reduxjs/toolkit';
import contactsSliceReducer from './contacts/contacts.slice';
import filterSliceReducer from './filter/filter.slice';

export const rootReducer = combineReducers({
    contacts: contactsSliceReducer,
    filter: filterSliceReducer
})