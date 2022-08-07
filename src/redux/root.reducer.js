import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsSliceReducer from './contacts/contacts.slice';
import filterSliceReducer from './filter/filter.slice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts']
}


const rootReducer = combineReducers({
    contacts: contactsSliceReducer,
    filter: filterSliceReducer
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)