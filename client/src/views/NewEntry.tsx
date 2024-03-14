import JournalIssueForm from '../components/JournalIssueForm';
import Navbar from '../components/Navbar';

const NewEntry = () => {
  return (
    <>
      <Navbar selected='home' />
      <section className='grid grid-cols-12 content-center'>
        <h1 data-testid='main-heading' className='col-span-full'>
          Journal your day
        </h1>
        <JournalIssueForm />
      </section>
    </>
  );
};

export default NewEntry;
