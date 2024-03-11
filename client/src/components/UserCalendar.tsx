import { Entry } from '../types';
import './UserCalendar.css';

type UserCalendarProps = {
  entries: Entry[];
};

const UserCalendar = ({ entries }: UserCalendarProps) => {
  return (
    <>
      <section className='section calendar__section'>
        <h2>Calendar Entries:</h2>
        <ul className='ul calendar__ul'>
          {entries.map((entry) => (
            <li key={entry.id}>
              {entry.date} | {entry.issue.name}: {entry.issue.score} {' | '}
              {entry.params[0].name}: {entry.params[0].score} {', '}
              {entry.params[1].name}: {entry.params[1].score} {', '}
              {entry.params[2].name}: {entry.params[2].score}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default UserCalendar;
