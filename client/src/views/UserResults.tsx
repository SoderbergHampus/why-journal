import { generateMockData } from '../dataMock';

const UserResults = () => {
  console.log(generateMockData(10));

  return (
    <h1 data-testid='main-heading' className='main__heading'>
      Your results
    </h1>
  );
};

export default UserResults;
