import { Routes, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
