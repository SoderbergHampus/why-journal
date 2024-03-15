import { useEffect, useState } from 'react';

type NavbarProps = {
  selected: string;
};

const Navbar = ({ selected }: NavbarProps) => {
  const [newEntryClass, setNewEntryClass] = useState('');
  const [resultClass, setResultClass] = useState('');

  useEffect(() => {
    switch (selected) {
      case 'newEntry':
        setNewEntryClass(' bg-primary');
        setResultClass('');
        break;

      case 'results':
        setNewEntryClass('');
        setResultClass(' bg-primary');
        break;

      default:
        setNewEntryClass('');
        setResultClass('');
        break;
    }
  }, [selected]);

  return (
    <nav>
      <p className='text-xl font-bold tracking-tight'>Why, Journal?</p>
      <ul className='flex flex-wrap items-center justify-between gap-2'>
        <li>
          <a href='/' className={newEntryClass}>
            New Entry
          </a>
        </li>
        <li>
          <a href='/myResults' className={resultClass}>
            Results
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
