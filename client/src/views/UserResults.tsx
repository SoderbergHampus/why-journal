import { useEffect } from 'react';
import LineGraph from '../components/LineGraph';
import { Entry, ViewProps } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../state/store';
import { refresh } from '../state/entries/entriesSlice';
import UserCalendar from '../components/UserCalendar';
import { navSelect } from '../state/nav/navSlice';

const UserResults = ({ setSelectedView }: ViewProps) => {
  useEffect(() => {
    setSelectedView('results');
  });

  const entries: Entry[] = useSelector(
    (state: RootState) => state.entries.values
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(refresh());
    dispatch(navSelect('results'));
  }, [dispatch]);

  return (
    <div className='view'>
      <h1 data-testid='main-heading'>Your results</h1>

      {entries.length >= 2 ? (
        <LineGraph />
      ) : (
        entries.length === 1 && (
          <h2 className='component section'>
            You have one journal entry, make one more to unlock more analysis!
          </h2>
        )
      )}

      {entries.length >= 1 ? (
        <UserCalendar />
      ) : (
        <h2 className='component section'>
          You have not made any entries in the journal yet!
        </h2>
      )}
    </div>
  );
};

export default UserResults;
