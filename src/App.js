import { Routes, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage';
import Sidebar from './Component/Sidebar';

function App() {
  return (
    <div>
      <Sidebar/>
      <div className='content-wrapper'>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
