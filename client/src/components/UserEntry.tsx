import { useLocation } from 'react-router-dom';

import './UserEntry.css';

export const UserEntry = () => {
  const location = useLocation();
  const entry = location.state.entry;

  return (
    <>
      <h1>{entry.date}</h1>
      <article className='component component-entry--wide'>
        <div className='entry-flex'>
          <h2>Scores</h2>
          <section className='entry__container section'>
            <div className='entry-prop font-bold'>
              <p>Headache: </p>
              <p>{entry.issue.score} </p>
            </div>

            <div className='entry-prop'>
              <p>Sleep:</p>
              <p>{entry.parameters[0].score}</p>
            </div>

            <div className='entry-prop'>
              <p>Diet:</p>
              <p>{entry.parameters[1].score}</p>
            </div>

            <div className='entry-prop'>
              <p>Stress:</p>
              <p>{entry.parameters[2].score}</p>
            </div>
          </section>
        </div>

        <div className='entry-flex'>
          <h2>Journal Entry</h2>
          <section className='section'>
            <p>{entry.journalEntry}</p>
          </section>
        </div>
      </article>
    </>
  );
};
