import JournalIssueForm from '../components/JournalIssueForm';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../state/store';
import { useEffect } from 'react';
import { navSelect } from '../state/nav/navSlice';

const NewEntry = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(navSelect('newEntry'));
  }, [dispatch]);

  return (
    <div className='view'>
      <h1 data-testid='main-heading'>Journal your day</h1>
      <JournalIssueForm />
    </div>
  );
};

export default NewEntry;
