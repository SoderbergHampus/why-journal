// import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import { UserEntry } from '../components/UserEntry';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../state/store';
import { navSelect } from '../state/nav/navSlice';

const UserEntryView = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(navSelect('newEntry'));
  }, [dispatch]);

  return (
    <div className='view'>
      <UserEntry />
    </div>
  );
};

export default UserEntryView;
