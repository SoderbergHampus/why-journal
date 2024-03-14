import { useNavigate } from 'react-router-dom';
import { Entry } from '../types';

type UserCalendarProps = {
  entries: Entry[] | undefined;
};

const UserCalendar = ({ entries }: UserCalendarProps) => {
  const navigate = useNavigate();
  return (
    <>
      {entries !== undefined && (
        <section className='col-span-10 col-start-2'>
          <h2>Calendar Entries:</h2>
          <ul className='flex max-w-3xl flex-wrap justify-between gap-3.5 rounded bg-gray-semilight p-4'>
            {entries
              .map((entry) => (
                <li key={entry.date} className=''>
                  <a href=''>
                    <button
                      className='button w-28 bg-gray-light'
                      onClick={() =>
                        navigate(entry.date, {
                          state: { date: entry.date, entry: entry },
                        })
                      }
                    >
                      {entry.date}
                    </button>
                  </a>
                </li>
              ))
              .sort((a, b) => a.key!.localeCompare(b.key!))}
          </ul>
        </section>
      )}
    </>
  );
};

export default UserCalendar;
