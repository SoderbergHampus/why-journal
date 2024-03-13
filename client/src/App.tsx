import { Route, Routes } from 'react-router-dom';
import './App.css';
import NewEntry from './views/NewEntry';
import UserResults from './views/UserResults';
import { mockToApi } from './dataMock';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<NewEntry />}></Route>
        <Route path='/myResults' element={<UserResults />}></Route>
      </Routes>
    </>
  );
}

export default App;
