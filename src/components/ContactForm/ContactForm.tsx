import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import ContactFormStyled from './ContactForm.styled';
import { IContact } from 'types';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsSlice';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useGetContactsQuery('');
  const [addContact] = useAddContactMutation();

  const nameId = uuid();
  const numberId = uuid();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (contacts!.filter((item: IContact) => item.name === name).length > 0) {
      alert(`${name} is already in contacts`);
    } else {
      addContact({ name, phone: number });
    }

    setName('');
    setNumber('');
  };

  return (
    <ContactFormStyled>
      <form name="contact" onSubmit={handleSubmit}>
        <label htmlFor={nameId}>Name</label>
        <input
          value={name}
          onChange={handleChange}
          id={nameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />

        <label htmlFor={numberId}>Number</label>
        <input
          value={number}
          onChange={handleChange}
          id={numberId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />

        <button type="submit">Add contact</button>
      </form>
    </ContactFormStyled>
  );
};

export default ContactForm;
