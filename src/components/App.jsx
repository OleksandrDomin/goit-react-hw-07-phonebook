import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectIsLoading } from 'redux/selectors';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { fetchContactsThunk } from 'redux/operations';
import { Loader } from './Loader/Loader';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContactsThunk())
      .unwrap()
      .catch(() => toast.error('Server request error. Please try again.'));
  }, [dispatch]);

  return (
    <div className={css.container}>
      <div className={css.phoneBookWrapper}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
      </div>

      <div className={css.contactsWrapper}>
        <h2 className={css.title}>Contacts</h2>
        <Filter />
        {isLoading ? <Loader /> : <ContactList />}
      </div>
    </div>
  );
};
