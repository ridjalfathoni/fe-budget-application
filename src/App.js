import { Routes, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage';
import Sidebar from './Component/Sidebar';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <nav className='sidebar'>
        <Link to="/">Dashboard</Link>
        <Link to="/Transactions">Transactions</Link>
        <Link to="/Wallet">Wallet</Link>
      </nav>
      <div className="features-menu">
        <div className="features-header">
          <h1>Dashboard</h1>
        </div>
      </div>
      <div className="balance items-container">
        <div className="items-img">
          <img src={require("./assets/icons/wallet.png")} alt="" />
        </div>
        <div className="items-content">
          <span className='text-name'>Balance</span>
          <span className='text-amount'>20,000.00</span>
        </div>
      </div>
      <div className="income items-container">
        <div className="items-img">
          <img src={require("./assets/icons/income.png")} alt="" />
        </div>
        <div className="items-content">
          <span className='text-name'>Income</span>
          <span className='text-amount'>20,000.00</span>
        </div>
      </div>
      <div className="expense items-container">
        <div className="items-img">
          <img src={require("./assets/icons/expense.png")} alt="" />
        </div>
        <div className="items-content">
          <span className='text-name'>Expense</span>
          <span className='text-amount'>20,000.00</span>
        </div>
      </div>
      <div className="add items-container">
        <div className="items-img">
          <img src={require("./assets/icons/add.png")} alt="" />
        </div>
      </div>
      <div className="overview items-container">
        <div className="overview-header">
          <span className='text-name'>Overview</span>
          <select name="date" id="date" className='overview-select'>
            <option value="monthly" defaultValue={true}> Monthly</option>
            <option value="weekly"> Weekly</option>
          </select>
        </div>
      </div>
      <div className="recent-transactions items-container">
        <div className="recent-transactions-header">
          <span className='text-name'>Recent Transactions</span>
        </div>
        <div className="recent-transactions-content">
          <div className="recent-transaction-items">
            <div className="recent-img-container">
              <img src={require("./assets/icons/add.png")} alt="" />
            </div>
            <div className="content-wrapper">
              <div>
                <span className='text-category'>Salary</span>
                <span className='text-date'>28 January 2023</span>
              </div>
              <span className='text-amount-income'>1000000</span>
            </div>
          </div>
          <div className="recent-transaction-items">
            <div className="recent-img-container">
              <img src={require("./assets/icons/add.png")} alt="" />
            </div>
            <div className="content-wrapper">
              <div>
                <span className='text-category'>Salary</span>
                <span className='text-date'>28 January 2023</span>
              </div>
              <span className='text-amount-expense'>1000000</span>
            </div>
          </div>
          <div className="recent-transaction-items">
            <div className="recent-img-container">
              <img src={require("./assets/icons/add.png")} alt="" />
            </div>
            <div className="content-wrapper">
              <div>
                <span className='text-category'>Salary</span>
                <span className='text-date'>28 January 2023</span>
              </div>
              <span className='text-amount-expense'>1000000</span>
            </div>
          </div>
          <div className="recent-transaction-items">
            <div className="recent-img-container">
              <img src={require("./assets/icons/add.png")} alt="" />
            </div>
            <div className="content-wrapper">
              <div>
                <span className='text-category'>Salary</span>
                <span className='text-date'>28 January 2023</span>
              </div>
              <span className='text-amount-expense'>1000000</span>
            </div>
          </div>
          <div className="recent-transaction-items">
            <div className="recent-img-container">
              <img src={require("./assets/icons/add.png")} alt="" />
            </div>
            <div className="content-wrapper">
              <div>
                <span className='text-category'>Salary</span>
                <span className='text-date'>28 January 2023</span>
              </div>
              <span className='text-amount-expense'>1000000</span>
            </div>
          </div>
          <div className="recent-transaction-items">
            <div className="recent-img-container">
              <img src={require("./assets/icons/add.png")} alt="" />
            </div>
            <div className="content-wrapper">
              <div>
                <span className='text-category'>Salary</span>
                <span className='text-date'>28 January 2023</span>
              </div>
              <span className='text-amount-income'>1000000</span>
            </div>
          </div>
          <div className="recent-transaction-items">
            <div className="recent-img-container">
              <img src={require("./assets/icons/add.png")} alt="" />
            </div>
            <div className="content-wrapper">
              <div>
                <span className='text-category'>Salary</span>
                <span className='text-date'>28 January 2023</span>
              </div>
              <span className='text-amount-expense'>1000000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
