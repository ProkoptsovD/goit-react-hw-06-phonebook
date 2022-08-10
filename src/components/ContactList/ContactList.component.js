import { useDispatch, useSelector } from 'react-redux';
import { ListItem, ListOfContacts } from './ContactList.styled';
import { contactsActions } from 'redux/contacts/contacts.slice';
import { contactsSelectors } from 'redux/contacts/contacts.selectors';
import Contact from './Contact';

const ContactList = () => {
    const dispatch = useDispatch();
    const rawContacts = useSelector(contactsSelectors.getAllContacts);
    const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
    const contactList = filteredContacts ? filteredContacts : rawContacts

    return (
        <ListOfContacts>
            {contactList.map(({ id, name, number }) => (
                <ListItem
                    key={id}
                    onClick={() => dispatch(contactsActions.deleteContact(id))}
                >
                    <Contact
                        name={name}
                        number={number}
                    />
                </ListItem>
            ))}
        </ListOfContacts>
    );
}

export default ContactList;