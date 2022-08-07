import { createAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid';

const addContact = createAction('[Contacts] Add new contact', (newContact) => {
    return {
        payload: {
            ...newContact,
            id: nanoid()
        }
    }
});
const deleteContact = createAction('[Contacts] Delete contact');

export const contactsActions = {
    addContact,
    deleteContact,
}