import React from 'react';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import { IContact } from 'types';
import ContactItemStyled from './ContactItem.styled';

interface IContactItem {
  contact: IContact;
}

const ContactItem: React.FC<IContactItem> = ({ contact }) => {
  const { id, name, phone } = contact;

  const [deleteContact] = useDeleteContactMutation();

  return (
    <ContactItemStyled>
      <span>
        {name}: {phone}
      </span>
      <button onClick={() => deleteContact(id)} type="button">
        Delete
      </button>
    </ContactItemStyled>
  );
};

export default ContactItem;
