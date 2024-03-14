import { useEffect, useState } from 'react';
import LineGraph from '../components/LineGraph';
import UserCalendar from '../components/UserCalendar';
import { Entry } from '../types';
import Navbar from '../components/Navbar';

const UserResults = () => {
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
    <>
      <Navbar selected='results' />
      <>
        <section className='grid grid-cols-12 content-center'>
          <h1 data-testid='main-heading'>Your results</h1>

          {entries !== undefined && entries.length > 0 ? (
            <UserCalendar entries={entries} />
          ) : (
            <></>
          )}
          {entries !== undefined && entries.length > 1 ? (
            <LineGraph entries={entries} />
          ) : (
            <></>
          )}
        </section>
      </>
    </>
  );
};

export default UserResults;
