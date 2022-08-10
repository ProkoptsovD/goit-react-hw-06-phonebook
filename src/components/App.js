import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { theme } from 'theme';

import Container from './common/Container';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Empty from './Empty';

import styles from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';

import { useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/contacts/contacts.selectors';

export const App = () => {
  const contacts = useSelector(contactsSelectors.getAllContacts);
  const isEmpty = contacts.length === 0;

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <h1 className={styles.title} >
            Phonebook
          </h1>
          <ContactForm />
          <h2 className={ styles.title } >
            Contacts
          </h2>
          <Filter />
          {
            !isEmpty
              ? <ContactList />
              : <Empty message="Your phonebook is empty..."/>
          }
        </Container>
        <ToastContainer />
      </ThemeProvider>
    );
};
