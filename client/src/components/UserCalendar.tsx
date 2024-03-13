import { Entry } from '../types';

type UserCalendarProps = {
  entries: Entry[] | undefined;
};

const UserCalendar = ({ entries }: UserCalendarProps) => {
  return (
    <>
      {entries !== undefined && (
        <section className='col-span-10 col-start-2'>
          <h2>Calendar Entries:</h2>
          <ul>
            {entries
              .map((entry) => (
                <li key={entry.date}>
                  <a href=''>
                    <button>
                      {entry.date}
                      {/* | {entry.issue.name}: {entry.issue.score} {' | '}
              {entry.parameters[0].name}: {entry.parameters[0].score} {', '}
              {entry.parameters[1].name}: {entry.parameters[1].score} {', '}
              {entry.parameters[2].name}: {entry.parameters[2].score} */}
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
