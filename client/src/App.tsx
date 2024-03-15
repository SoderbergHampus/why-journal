import { Route, Routes } from 'react-router-dom';
import './App.css';
import NewEntry from './views/NewEntry';
import UserResults from './views/UserResults';
import UserEntryView from './views/UserEntryView';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [selectedPage, setSelectedPage] = useState('/');
  return (
    <>
      <Navbar selected={selectedPage} />
      <Routes>
        <Route
          path='/'
          element={<NewEntry setSelectedView={setSelectedPage} />}
        ></Route>
        <Route
          path='/myResults'
          element={<UserResults setSelectedView={setSelectedPage} />}
        ></Route>
        <Route
          path='/myResults/:date'
          element={<UserEntryView setSelectedView={setSelectedPage} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
