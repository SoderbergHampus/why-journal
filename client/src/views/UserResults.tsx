import { useEffect, useState } from 'react';
import LineGraph from '../components/LineGraph';
import UserCalendar from '../components/UserCalendar';
import { Entry } from '../types';

const UserResults = () => {
  // Mock fetching data
  const [userHistory, setUserHistory] = useState<Entry[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/journalEntries')
      .then((response) => response.json())
      .then((data: Entry[]) => {
        setUserHistory(data);
      })
      .catch(() => console.log('Error when fetching'));
  }, []);

  console.log('user history: ', userHistory);

  return (
    <>
      <h1 data-testid='main-heading' className='main__heading'>
        Your results
      </h1>
      <UserCalendar entries={userHistory} />
      <LineGraph entries={userHistory} />
    </>
  );
};

export default UserResults;
