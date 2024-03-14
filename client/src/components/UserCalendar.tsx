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
          <ul className='grid max-w-3xl grid-cols-12'>
            {entries
              .map((entry) => (
                <li key={entry.date} className='col-span-2 my-3'>
                  <a href=''>
                    <button
                      className='button'
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
