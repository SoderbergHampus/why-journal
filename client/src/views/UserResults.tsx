import LineGraph from '../components/LineGraph';
import UserCalendar from '../components/UserCalendar';
import { generateMockData } from '../dataMock';

const UserResults = () => {
  // Mock fetching data
  const userHistory = generateMockData(10);

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
