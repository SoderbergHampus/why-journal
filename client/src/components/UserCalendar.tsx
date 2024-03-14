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
          <h2 className='col-span-full col-start-2'>Calendar Entries:</h2>
          <section className='col-span-10 col-start-2 grid max-h-96 grid-flow-col grid-cols-12 place-items-center overflow-scroll rounded bg-gray-semilight'>
            <div className='col-span-full grid w-full grid-cols-5 place-items-center gap-1 py-4'>
              <p className='col-start-1 text-xl font-medium'>Date</p>
              <p className='col-start-2 text-xl font-medium'>Headache</p>
              <p className='col-start-3 text-xl font-medium'>Sleep</p>
              <p className='col-start-4 text-xl font-medium'>Diet</p>
              <p className='col-start-5 text-xl font-medium'>Stress</p>
            </div>

            {entriesCopy.map((entry) => (
              // <div
              //   key={entry.date}
              //   className='col-span-full grid w-full grid-cols-5 place-items-center gap-1 even:bg-gray-light'
              // >
              <button
                key={entry.date}
                onClick={() =>
                  navigate(entry.date, {
                    state: { date: entry.date, entry: entry },
                  })
                }
                className='col-span-full grid w-full grid-cols-5 place-items-center gap-1 py-2 even:bg-gray-light'
              >
                <p>{entry.date}</p>
                <p className='text-red'>{entry.issue.score}</p>
                <p>{entry.parameters[0].score}</p>
                <p>{entry.parameters[1].score}</p>
                <p>{entry.parameters[2].score}</p>
              </button>
              // </div>
            ))}
          </section>
        </>
      )}
    </>
  );
};

export default UserCalendar;
