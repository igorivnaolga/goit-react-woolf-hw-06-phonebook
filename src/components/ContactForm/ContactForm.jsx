import { Formik } from 'formik';
import { Form, Field, Button, SectionInput } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addPhone } from '../../redux/contactSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const addContact = value => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === value.name.toLowerCase()
      )
    ) {
      alert(`${value.name} is already in contacts`);
      return;
    }
    dispatch(addPhone(value));
  };

  return (
    <SectionInput>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, action) => {
          action.resetForm();
          addContact(values);
        }}
      >
        <Form>
          <label htmlFor="Name">
            Name
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="Number">
            Number
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </SectionInput>
  );
};
