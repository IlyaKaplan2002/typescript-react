import React from 'react';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
import { getFilter } from 'redux/filter/filterSelectors';
import ContactItem from './ContactItem';
import { IContact } from 'types';

const getFilteredItems = (items: IContact[], filter: string) =>
  items.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));

const ContactList: React.FC = () => {
  const { data: items } = useGetContactsQuery('');
  const filter = useSelector(getFilter);

  return (
    <ul>
      {items &&
        getFilteredItems(items, filter).map(item => (
          <ContactItem key={item.id} contact={item} />
        ))}
    </ul>
  );
};

export default ContactList;
