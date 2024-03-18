import { useEffect, useState } from 'react';
import LineGraph from '../components/LineGraph';
import UserCalendar from '../components/UserCalendar';
import { Entry, ViewProps } from '../types';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '../state/store';
// import { refresh } from '../state/entries/entriesSlice';

const UserResults = ({ setSelectedView }: ViewProps) => {
  useEffect(() => {
    setSelectedView('results');
  });

  const [entries, setEntries] = useState<Entry[]>();
  // const entries = useSelector((state: RootState) => state.entries.entries);
  // const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    fetch('http://localhost:3000/api/journalEntries')
      .then((response) => response.json())
      .then((data: Entry[]) => {
        setEntries(data.sort((a, b) => a.date.localeCompare(b.date)));
      })
      .catch(() => console.log('Error when fetching'));
  });
  return (
    <div className='view'>
      <h1 data-testid='main-heading'>Your results</h1>

      <LineGraph />
      {/* <UserCalendar /> */}
    </div>
  );
};

export default UserResults;
