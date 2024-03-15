import { useEffect } from 'react';
import JournalIssueForm from '../components/JournalIssueForm';
import { ViewProps } from '../types';

const NewEntry = ({ setSelectedView }: ViewProps) => {
  useEffect(() => {
    setSelectedView('newEntry');
  });

  return (
    <div className='view-container'>
      <h1 data-testid='main-heading'>Journal your day</h1>
      <JournalIssueForm />
    </div>
  );
};

export default NewEntry;
