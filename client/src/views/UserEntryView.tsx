// import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import { UserEntry } from '../components/UserEntry';
import { ViewProps } from '../types';

const UserEntryView = ({ setSelectedView }: ViewProps) => {
  useEffect(() => {
    setSelectedView('results');
  });

  return (
    <div className='view-container'>
      <UserEntry />
    </div>
  );
};

export default UserEntryView;
