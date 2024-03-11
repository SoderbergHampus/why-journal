import { Route, Routes } from 'react-router-dom';
import './App.css';
import NewEntry from './views/NewEntry';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NewEntry />}></Route>
    </Routes>
  );
}

export default App;
