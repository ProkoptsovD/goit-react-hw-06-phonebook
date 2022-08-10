import { filterSelectors } from 'redux/filter/filter.selectors';
import { createSelector } from 'reselect';

const getAllContacts = (state) => state.contacts.items;

const getFilteredContacts = createSelector(
    getAllContacts,
    filterSelectors.getFilter,
    (contacts, filter) => contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
);


export const contactsSelectors = {
    getAllContacts,
    getFilteredContacts
}
