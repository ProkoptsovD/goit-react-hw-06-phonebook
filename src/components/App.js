import { ThemeProvider } from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import { theme } from 'theme';

import Container from './common/Container';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Empty from './Empty';

import styles from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { contactsActions } from 'redux/contacts/contacts.actions';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/contacts/contacts.selectors';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getAllContacts);
  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
  const isEmpty = contacts.length === 0;

  const isContactUnique = (newContact) => !contacts.some(({ name }) => name.toLowerCase() === newContact.name.toLowerCase());

  const addContact = (newContact) => {  
    if (!isContactUnique(newContact)) {
      toast.error(`${newContact.name} is already in contacts`);
      return false;
    }

    dispatch(contactsActions.addContact(newContact));
    return true;
  }
  const deleteContact = (contactId) => {
    dispatch(contactsActions.deleteContact(contactId))
  };

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <h1
            className={styles.title}
          >
            Phonebook
          </h1>
          <ContactForm
            addContact={ addContact }
          />
          
          <h2
            className={ styles.title }
          >
            Contacts
          </h2>
          <Filter />
          {
            !isEmpty
              ? <ContactList
                  deleteContact={ deleteContact }
                  contactList={ filteredContacts.length ? filteredContacts : contacts }
                />
              : <Empty message="Your phonebook is empty..."/>
          }
        </Container>
        <ToastContainer />
      </ThemeProvider>
    );
};
