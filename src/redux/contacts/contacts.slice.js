import { createSlice } from '@reduxjs/toolkit';
import { contactsActions } from 'redux/contacts/contacts.actions';

const initialState = {
    items: []
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
        [contactsActions.addContact](state, action) {
            state.items.push(action.payload);
        },
        [contactsActions.deleteContact](state, action) {
            state.items = state.items.filter(({ id }) => id !== action.payload);
        },
        [contactsActions.reHydrateContacts](state, action) {
            state.items = action.payload
        }
    },
})

export default contactsSlice.reducer;