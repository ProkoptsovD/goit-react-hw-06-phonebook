import { createSlice } from '@reduxjs/toolkit';
import { contactsActions } from 'redux/actions/contacts.actions';

const initialState = {
    items: [],
    filter: ''
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
        [contactsActions.addNewContact](state, action) {
            console.log(action);
            state.items.push(action.payload);
        },
        [contactsActions.deleteContact](state, action) {
            state.items.filter(({ id }) => id !== action.payload);
        },
    },
})

export default contactsSlice.reducer;