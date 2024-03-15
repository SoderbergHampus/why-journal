import { useEffect } from 'react';
import JournalIssueForm from '../components/JournalIssueForm';
import { ViewProps } from '../types';

const NewEntry = ({ setSelectedView }: ViewProps) => {
  useEffect(() => {
    setSelectedView('newEntry');
  });

  return (
    <main>
      <section className='section-view'>
        <h1 data-testid='main-heading'>Journal your day</h1>
        <JournalIssueForm />
      </section>
    </main>
  );
};

export default NewEntry;
