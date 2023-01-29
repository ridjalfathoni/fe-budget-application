import React from 'react';
import './homepage.css'
function Homepage(props) {
    return (
        <section className='dashboard'>
            <h1>Dashboard</h1>
            <div className='grid-container'>
                <div className='grid-content'>
                    <div className='img-container'>
                        <img src={require('../assets/icons/wallet.png')} alt="" />
                    </div>
                    <div className='wallet-content'>
                        <span className='header-text'>Balance</span>
                        <span className='content-text'>20,000.00</span>
                    </div>
                </div>
                <div className='grid-content'>
                    <div className='img-container'>
                        <img src={require('../assets/icons/income.png')} alt="" />
                    </div>
                    <div className='wallet-content'>
                        <span className='header-text'>Income</span>
                        <span className='content-text'>20,000.00</span>
                    </div>
                </div>
                <div className='grid-content'>
                    <div className='img-container'>
                        <img src={require('../assets/icons/expense.png')} alt="" />
                    </div>
                    <div className='wallet-content'>
                        <span className='header-text'>Balance</span>
                        <span className='content-text'>20,000.00</span>
                    </div>
                </div>
                <div className='grid-content'>
                    <div className='img-container'>
                        <img src={require('../assets/icons/add.png')} alt="" />
                    </div>
                </div>
                <div className='grid-content'>
                    <div className='img-container'>
                        <img src={require('../assets/icons/expense.png')} alt="" />
                    </div>
                    <div className='wallet-content'>
                        <span className='header-text'>Balance</span>
                        <span className='content-text'>20,000.00</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Homepage;