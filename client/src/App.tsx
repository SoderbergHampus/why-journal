import { Route, Routes } from 'react-router-dom';
import './App.css';
import NewEntry from './views/NewEntry';
import UserResults from './views/UserResults';
import UserEntryView from './views/UserEntryView';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<NewEntry />}></Route>
        <Route path='/myResults' element={<UserResults />}></Route>
        <Route path='/myResults/:date' element={<UserEntryView />}></Route>
      </Routes>
    </>
  );
}

export default App;
