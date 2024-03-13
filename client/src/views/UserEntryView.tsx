import Navbar from '../components/Navbar';
import { UserEntry } from '../components/UserEntry';

const UserEntryView = () => {
  return (
    <>
      <Navbar selected='results'></Navbar>
      <section className='grid grid-cols-12'>
        <UserEntry />
      </section>
    </>
  );
};

export default UserEntryView;
