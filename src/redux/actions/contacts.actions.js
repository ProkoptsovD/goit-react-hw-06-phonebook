import { createAction } from '@reduxjs/toolkit'

const addNewContact = createAction('[Contacts] Add new contact');
const deleteContact = createAction('[Contacts] Delete contact');

export const contactsActions = {
    addNewContact,
    deleteContact
}