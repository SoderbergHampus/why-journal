import { Route, Routes } from 'react-router-dom';
import './App.css';
import NewEntry from './views/NewEntry';
import UserResults from './views/UserResults';

function App() {
  return (
    <>
      <div className='navbar'>
        <div className='navbar__title'>Why, Journal?</div>
        <div className='container navbar-links__container'>
          <a href='/' className='navbar__link'>
            Home
          </a>
          <a href='/myResults' className='navbar__link'>
            Results
          </a>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<NewEntry />}></Route>
        <Route path='/myResults' element={<UserResults />}></Route>
      </Routes>
    </>
  );
}

export default App;
