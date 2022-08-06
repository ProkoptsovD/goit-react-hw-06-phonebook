import { combineReducers } from '@reduxjs/toolkit';
import contactsSliceReducer from './slices/contacts.slice';

export const rootReducer = combineReducers({
    contacts: contactsSliceReducer
})