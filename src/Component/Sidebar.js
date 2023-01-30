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
            </nav>
        </>
    );
}

export default Sidebar;