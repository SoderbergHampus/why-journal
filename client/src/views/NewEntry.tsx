import JournalIssueForm from '../components/JournalIssueForm';
import Navbar from '../components/Navbar';

const NewEntry = () => {
  return (
    <>
      <Navbar selected='home' />
      <section className='section-view'>
        <h1 data-testid='main-heading'>Journal your day</h1>
        <JournalIssueForm />
      </section>
    </>
  );
};

export default NewEntry;
