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
            <li key={entry.date}>
              {entry.date} | {entry.issue.name}: {entry.issue.score} {' | '}
              {entry.parameters[0].name}: {entry.parameters[0].score} {', '}
              {entry.parameters[1].name}: {entry.parameters[1].score} {', '}
              {entry.parameters[2].name}: {entry.parameters[2].score}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default UserCalendar;
