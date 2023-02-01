import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Component/Card';
import List from '../Component/List';
import { getAllTransactions } from '../Redux/Transactions';
// import './Dashboard.css'

function Dashboard(props) {
    const { data } = useSelector((state) => state.transactions);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllTransactions())
    }, [dispatch])
    const dummyCard = [
        {
            key: "balance",
            subheader: "Balance",
            amount: 10000,
            imgUrl: require('../assets/icons/wallet.png')
        },
        {
            key: "income",
            subheader: "Income",
            amount: 10000,
            imgUrl: require('../assets/icons/income.png')
        },
        {
            key: "expense",
            subheader: "Expense",
            amount: 10000,
            imgUrl: require('../assets/icons/expense.png')
        },
        {
            key: "add",
            imgUrl: require('../assets/icons/add.png')
        },
    ]

    return (
        <>
            <div className="features-menu">
                <div className="features-header">
                    <h1>Dashboard</h1>
                </div>
            </div>
            <Card cardListContent={dummyCard} />
            <List title="Recent Transactions" data={data}/>
        </>
    );
}

export default Dashboard;