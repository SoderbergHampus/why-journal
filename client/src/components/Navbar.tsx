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
        setNewEntryClass('link--active');
        setResultClass('');
        break;

      case 'results':
        setNewEntryClass('');
        setResultClass('link--active');
        break;

      default:
        setNewEntryClass('');
        setResultClass('');
        break;
    }
  }, [selected]);

  return (
    <nav className='nav'>
      <p className='logo'>Why, Journal?</p>
      <article>
        <a href='/' className={'link ' + newEntryClass}>
          New Entry
        </a>
        <a href='/myResults' className={'link ' + resultClass}>
          Results
        </a>
      </article>
    </nav>
  );
};

export default Navbar;
