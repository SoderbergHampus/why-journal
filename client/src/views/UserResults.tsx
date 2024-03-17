import { useEffect, useState } from 'react';
import LineGraph from '../components/LineGraph';
import UserCalendar from '../components/UserCalendar';
import { Entry, ViewProps } from '../types';

const UserResults = ({ setSelectedView }: ViewProps) => {
  useEffect(() => {
    setSelectedView('results');
  });

  const [entries, setEntries] = useState<Entry[]>();

  useEffect(() => {
    fetch('http://localhost:3000/api/journalEntries')
      .then((response) => response.json())
      .then((data: Entry[]) => {
        setEntries(data.sort((a, b) => a.date.localeCompare(b.date)));
      })
      .catch(() => console.log('Error when fetching'));
  }, []);

  return (
    <div className='view'>
      <h1 data-testid='main-heading'>Your results</h1>

      {entries !== undefined && entries.length > 1 ? (
        <LineGraph entries={entries} />
      ) : (
        <></>
      )}

      {entries !== undefined && entries.length > 0 ? (
        <UserCalendar entries={entries} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserResults;
