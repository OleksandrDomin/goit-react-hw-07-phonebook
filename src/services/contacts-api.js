import axios from 'axios';

const contactsAPI = axios.create({
  baseURL: 'https://64ac30839edb4181202f410a.mockapi.io',
});

export const fetchContacts = async () => {
  const { data } = await contactsAPI.get('/contacts');
  return data;
};

export const addContact = async newContact => {
  const { data } = await contactsAPI.post('/contacts', newContact);
  return data;
};

export const deleteContact = id => contactsAPI.delete(`/contacts/${id}`);
