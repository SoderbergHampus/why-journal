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
          <section className='col-span-10 col-start-2 grid max-h-96 grid-flow-col grid-cols-12 overflow-scroll bg-gray-semilight'>
            {entriesCopy.map((entry) => (
              <button
                key={entry.date}
                className='col-span-full p-6'
                onClick={() =>
                  navigate(entry.date, {
                    state: { date: entry.date, entry: entry },
                  })
                }
              >
                {entry.date}
              </button>
            ))}
          </section>
        </>
      )}
    </>
  );
};

export default UserCalendar;
