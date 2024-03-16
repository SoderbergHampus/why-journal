import { useEffect, useState } from 'react';

type NavbarProps = {
  selected: string;
};

const Navbar = ({ selected }: NavbarProps) => {
  const [newEntryClass, setNewEntryClass] = useState('');
  const [resultClass, setResultClass] = useState('');
  const [burgerOpen, setBurgerOpen] = useState(false);

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

  const handleBurgerClick = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <>
      <nav className='nav'>
        <p className='logo'>Why, Journal?</p>
        <article className='links__nav'>
          <a href='/' className={'link ' + newEntryClass}>
            New Entry
          </a>
          <a href='/myResults' className={'link ' + resultClass}>
            Results
          </a>
        </article>

        <article className='burger-menu'>
          <button onClick={handleBurgerClick}>Burger</button>
        </article>
      </nav>
      {burgerOpen && (
        <div className='burger-menu--open'>
          <a href='/' className='link burger-item'>
            New Entry
          </a>
          <a href='/myResults' className='link burger-item'>
            Results
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
