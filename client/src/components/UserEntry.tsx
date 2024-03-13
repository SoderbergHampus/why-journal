import { useLocation } from 'react-router-dom';

export const UserEntry = () => {
  const location = useLocation();
  const entry = location.state.entry;

  return (
    <>
      <h1 className='col-span-10'>{entry.date}</h1>
      <h2 className='col-span-10 col-start-2'>Scores:</h2>
      <article className='col-span-9 col-start-3 flex flex-col gap-10'>
        <div className='entry-prop__container'>
          <h3 className='col-span-3'>{entry.issue.name}: </h3>
          <h3>{entry.issue.score} </h3>
        </div>

        <div className='entry-prop__container'>
          <h3 className='col-span-3'>{entry.parameters[0].name}:</h3>
          <h3>{entry.parameters[0].score}</h3>
        </div>

        <div className='entry-prop__container'>
          <h3 className='col-span-3'>{entry.parameters[1].name}:</h3>
          <h3>{entry.parameters[1].score}</h3>
        </div>

        <div className='entry-prop__container'>
          <h3 className='col-span-3'>{entry.parameters[2].name}:</h3>
          <h3>{entry.parameters[2].score}</h3>
        </div>
      </article>
      <h2 className='col-span-10 col-start-2 mt-10'>Journal Entry:</h2>
      <h3 className='col-span-9 col-start-3'>{entry.journalEntry}</h3>
    </>
  );
};
