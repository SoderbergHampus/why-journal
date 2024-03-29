import { Route, Routes } from 'react-router-dom';
import NewEntry from './views/NewEntry';
import UserResults from './views/UserResults';
import UserEntryView from './views/UserEntryView';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<NewEntry />}></Route>
          <Route path='/myResults' element={<UserResults />}></Route>
          <Route path='/myResults/:date' element={<UserEntryView />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
