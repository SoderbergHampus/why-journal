import { useEffect, useState } from 'react';
import LineGraph from '../components/LineGraph';
import UserCalendar from '../components/UserCalendar';
import { mockFetchHistory } from '../dataMock';
import { Entry } from '../types';

const UserResults = () => {
  // Mock fetching data
  const [userHistory, setUserHistory] = useState<Entry[]>([]);

  useEffect(() => {
    mockFetchHistory()
      .then((response) => response.json())
      .then((data) => setUserHistory(data));
  }, []);

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
