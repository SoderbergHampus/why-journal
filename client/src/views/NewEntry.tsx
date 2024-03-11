import JournalEntryForm from '../components/JournalEntryForm';
import JournalIssueForm from '../components/JournalIssueForm';

const NewEntry = () => {
  const issue = 'Headache';
  const parameters = ['sleep', 'diet', 'stress'];
  return (
    <>
      <h1 data-testid='main-heading'>Journal your day</h1>
      <JournalIssueForm issue={issue} params={parameters} />
      <JournalEntryForm />
      <a href='/myResults'>
        <button type='button'>Result view</button>
      </a>
    </>
  );
};

export default NewEntry;
