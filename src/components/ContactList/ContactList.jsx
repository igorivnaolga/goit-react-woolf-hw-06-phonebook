import ContactCard from 'components/ContactCard/ContactCard';
import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deletePhone } from '../../redux/contactSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter.filter);

  const handleDelete = contactId => dispatch(deletePhone(contactId));

  const visibleContacts = contacts.filter(contact => {
    const hasName = contact.name.toLowerCase().includes(filter.toLowerCase());
    return hasName;
  });

  return (
    visibleContacts.length > 0 && (
      <List>
        {visibleContacts.map(contact => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onDelete={handleDelete}
          />
        ))}
      </List>
    )
  );
};

export default ContactList;
