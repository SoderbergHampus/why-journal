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
        <section className='col-span-10 col-start-2 grid grid-flow-col grid-cols-12 bg-gray-semilight'>
          <h2 className='col-span-full'>Calendar Entries:</h2>
          {/* <ul className='flex max-w-3xl flex-wrap justify-between gap-3.5 rounded bg-gray-semilight p-4'> */}
          {/* <div className='col-span-full col-start-1 rounded bg-gray-semilight p-10'> */}
          {
            entriesCopy.map((entry) => (
              <button
                key={entry.date}
                className='col-span-full p-6'
                onClick={() =>
                  navigate(entry.date, {
                    state: { date: entry.date, entry: entry },
                  })
                }
              >
                {/* className='w-28'
                    onClick={() =>
                      navigate(entry.date, {
                        state: { date: entry.date, entry: entry },
                      })
                    }
           */}
                {entry.date}
              </button>
            ))
            // .sort((a, b) => a.key!.localeCompare(b.key!))}
          }
          {/* </div> */}
        </section>
      )}
    </>
  );
};

export default UserCalendar;
