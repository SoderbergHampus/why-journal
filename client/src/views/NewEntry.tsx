import JournalIssueForm from '../components/JournalIssueForm';

const NewEntry = () => {
  return (
    <>
      <h1 data-testid='main-heading' className='main__heading'>
        Journal your day
      </h1>
      <JournalIssueForm />
    </>
  );
};

export default NewEntry;
