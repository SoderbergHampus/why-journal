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
      <h1 data-testid='main-heading'>Your results</h1>
      <section className='grid grid-cols-12'>
        <UserCalendar entries={entries} />
        <LineGraph entries={entries} />
      </section>
    </>
  );
};

export default UserResults;
