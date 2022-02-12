import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IContact } from '../../types';

const BASE_URL = 'https://6204cd32161670001741af46.mockapi.io/api';

interface INewContact {
  name: string;
  phone: string;
}

export const contactsSlice = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContacts: builder.query<IContact[], string>({
      query: () => '/contacts',
      providesTags: result => ['Contact'],
    }),
    addContact: builder.mutation<IContact, INewContact>({
      query: contact => ({
        url: '/contacts',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation<IContact, string>({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsSlice;
