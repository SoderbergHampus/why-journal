import { useLocation } from 'react-router-dom';

export const UserEntry = () => {
  const location = useLocation();
  const entry = location.state.entry;

  return (
    <>
      <h1>{entry.date}</h1>
      <section className='entry__section'>
        <div className='entry-flex'>
          <h2>Scores</h2>
          <article className='entry__container'>
            <div className='entry-prop__container'>
              <p>Headache: </p>
              <p>{entry.issue.score} </p>
            </div>

            <div className='entry-prop__container'>
              <p>Sleep:</p>
              <p>{entry.parameters[0].score}</p>
            </div>

            <div className='entry-prop__container'>
              <p>Diet:</p>
              <p>{entry.parameters[1].score}</p>
            </div>

            <div className='entry-prop__container'>
              <p>Stress:</p>
              <p>{entry.parameters[2].score}</p>
            </div>
          </article>
        </div>

        <div className='entry-flex'>
          <h2>Journal Entry</h2>
          <div className='journal__container'>
            <p>{entry.journalEntry}</p>
          </div>
        </div>
      </section>
    </>
  );
};
