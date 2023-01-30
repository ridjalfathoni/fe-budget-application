import { Routes, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Sidebar from './Component/Sidebar';
import Transactions from './Pages/Transactions';
import Wallet from './Pages/Wallet';
import Login from './Pages/Login';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route element={<><ProtectedRoute /> <Sidebar /></>}>
            <Route path='/' element={<Dashboard />} />
            <Route path='Transactions' element={<Transactions />} />
            <Route path='Wallet' element={<Wallet />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
