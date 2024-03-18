import { useEffect } from 'react';
import LineGraph from '../components/LineGraph';
import { ViewProps } from '../types';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../state/store';
import { refresh } from '../state/entries/entriesSlice';
import UserCalendar from '../components/UserCalendar';

const UserResults = ({ setSelectedView }: ViewProps) => {
  useEffect(() => {
    setSelectedView('results');
  });

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <div className='view'>
      <h1 data-testid='main-heading'>Your results</h1>

      <LineGraph />
      <UserCalendar />
    </div>
  );
};

export default UserResults;
