import { useNavigate } from 'react-router-dom';
import { Entry } from '../types';

type UserCalendarProps = {
  entries: Entry[] | undefined;
};

const UserCalendar = ({ entries }: UserCalendarProps) => {
  const navigate = useNavigate();
  let entriesCopy;
  entries !== undefined ? (entriesCopy = [...entries]) : undefined;
  entriesCopy !== undefined &&
    entriesCopy.sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      {entriesCopy !== undefined && (
        <>
          <section className='component'>
            <h2 className='col-span-full col-start-2'>Calendar Entries</h2>
            <div className='calendar__container'>
              <div className='calendar__row'>
                <p className='calendar__heading'>Date</p>
                <p className='calendar__heading'>Headache</p>
                <p className='calendar__heading display-col--wide'>Sleep</p>
                <p className='calendar__heading display-col--wide'>Diet</p>
                <p className='calendar__heading display-col--wide'>Stress</p>
              </div>

              {entriesCopy.map((entry) => (
                <button
                  key={entry.date}
                  onClick={() =>
                    navigate(entry.date, {
                      state: { date: entry.date, entry: entry },
                    })
                  }
                  className={'calendar__row'}
                >
                  <p>{entry.date}</p>
                  {entry.issue.score >= 70 ? (
                    <p className='text-positive'>{entry.issue.score}</p>
                  ) : (
                    <p className='text-negative'>{entry.issue.score}</p>
                  )}
                  <p className='display-col--wide'>
                    {entry.parameters[0].score}
                  </p>
                  <p className='display-col--wide'>
                    {entry.parameters[1].score}
                  </p>
                  <p className='display-col--wide'>
                    {entry.parameters[2].score}
                  </p>
                </button>
                // </div>
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default UserCalendar;
