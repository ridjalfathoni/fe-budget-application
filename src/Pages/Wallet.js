import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewWallet } from '../Redux/Wallet';

function Wallet(props) {
    const [walletData, setWalletData] = useState({})
    const dispatch = useDispatch()
    function submitForm(e) {
        try {
            e.preventDefault()
            dispatch(addNewWallet(walletData))
        } catch (error) {

        }
    }

    return (
        <>
            <div className="features-menu">
                <div className="features-header">
                    <h1>Wallet</h1>
                </div>
                <div className="balance items-container">
                    <form onSubmit={submitForm}>
                        <div className="form-input">
                            <label htmlFor="name">Wallet Name</label>
                            <input type="text" placeholder='Wallet Name' onChange={(e) => {
                                const name = e.target.value;
                                setWalletData({ ...walletData, ...{ name } });
                            }} />
                        </div>
                        <div className="form-input">
                            <label htmlFor="ammount">Amount</label>
                            <input type="number" placeholder='Amount' onChange={(e) => {
                                const amount = e.target.value;
                                setWalletData({ ...walletData, ...{ amount } });
                            }} />
                        </div>
                        <button>Save</button>
                    </form>
                    {/* <div className="items-img">
                        <img src={require("../assets/icons/wallet.png")} alt="" />
                    </div>
                    <div className="items-content">
                        <span className='text-name'>Balance</span>
                        <span className='text-amount'>20,000.00</span>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default Wallet;