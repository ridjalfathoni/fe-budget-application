import React from 'react';
import { Link } from 'react-router-dom'
// import './sidebar.css';

function Sidebar(props) {
    return (
        <>
            <nav className='sidebar'>
                <Link to="/">Dashboard</Link>
                <Link to="/Transactions">Transactions</Link>
                <Link to="/Wallet">Wallet</Link>
                <Link to="/Logout">Logout</Link>
            </nav>
        </>
    );
}

export default Sidebar;