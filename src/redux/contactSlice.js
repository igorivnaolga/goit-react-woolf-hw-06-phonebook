import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addPhone: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        };
      },
    },
    deletePhone(state, action) {
      return (state = state.filter(contact => contact.id !== action.payload));
    },
  },
});

export const { addPhone, deletePhone } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
