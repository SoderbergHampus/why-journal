// import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import { UserEntry } from '../components/UserEntry';
import { ViewProps } from '../types';

const UserEntryView = ({ setSelectedView }: ViewProps) => {
  useEffect(() => {
    setSelectedView('results');
  });

  return (
    <main>
      <section className='section-view'>
        <UserEntry />
      </section>
    </main>
  );
};

export default UserEntryView;
