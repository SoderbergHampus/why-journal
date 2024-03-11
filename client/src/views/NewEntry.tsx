import JournalEntryForm from '../components/JournalEntryForm';
import JournalIssueForm from '../components/JournalIssueForm';

const NewEntry = () => {
  const issue = 'Headache';
  const parameters = ['sleep', 'diet', 'stress'];
  return (
    <>
      <h1 data-testid='main-heading' className='main__heading'>
        Journal your day
      </h1>
      <JournalIssueForm issue={issue} params={parameters} />
      <JournalEntryForm />
    </>
  );
};

export default NewEntry;
