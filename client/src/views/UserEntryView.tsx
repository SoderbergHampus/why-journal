import Navbar from '../components/Navbar';
import { UserEntry } from '../components/UserEntry';

const UserEntryView = () => {
  return (
    <>
      <Navbar selected='results'></Navbar>
      <section className='section-view'>
        <UserEntry />
      </section>
    </>
  );
};

export default UserEntryView;
