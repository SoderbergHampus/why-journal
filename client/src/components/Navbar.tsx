import { useEffect, useState } from 'react';

type NavbarProps = {
  selected: string;
};

const Navbar = ({ selected }: NavbarProps) => {
  const [homeClass, setHomeClass] = useState('');
  const [resultClass, setResultClass] = useState('');

  useEffect(() => {
    switch (selected) {
      case 'home':
        setHomeClass(' bg-gray-400');
        setResultClass('');
        break;

      case 'results':
        setHomeClass('');
        setResultClass(' bg-gray-400');
        break;

      default:
        setHomeClass('');
        setResultClass('');
        break;
    }
  }, [selected]);

  return (
    <nav className='flex flex-wrap items-center justify-between bg-gray-300 p-6'>
      <p className='text-xl font-bold tracking-tight'>Why, Journal?</p>
      <ul className='flex flex-wrap items-center justify-between gap-4'>
        <li>
          <a href='/' className={homeClass}>
            Home
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
