import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
    items: []
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: {
            reducer: (state, action) => {
                state.items.push(action.payload);
            },
            prepare: (name, number) => ({
                payload: {
                    id: nanoid(),
                    name,
                    number
                }
            })
        },
        deleteContact(state, action) {
            state.items = state.items.filter(({ id }) => id !== action.payload);
        },
    },
})

export const contactsActions = contactsSlice.actions;
export default contactsSlice.reducer;