import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '../Component/List';
import Modal from '../Component/Modal';
import { addNewWallet, getListWallet, updateNewWallet } from '../Redux/Wallet';
import './wallet.css'

function Wallet(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [newWalletData, setNewWalletData] = useState({})
    const [updateWallet, setUpdateWallet] = useState({})
    const [modalForm, setModalForm] = useState({
        isForm: true,
        title: "",
        isUpdate: false,
        data: [
            {
                key: "name",
                label: "Wallet Name",
                type: "text",
                func: (cb) => {
                    const name = cb.target.value;
                    setNewWalletData({ ...newWalletData, ...{ name } });
                }
            },
            {
                key: "balance",
                label: "Amount",
                type: "Number",
                func: (cb) => {
                    const amount = cb.target.value;
                    setNewWalletData({ ...newWalletData, ...{ amount } })
                }
            }
        ]
    })
    const { data } = useSelector((state) => state.wallet);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getListWallet())
    }, [])

    const handleUpdateChange = (e) => {
        const { name, value } = e.target;
        setUpdateWallet((prev) => ({
            ...prev,
            id:prev._id,
            [name]:value
        }))
    }
    const updateModal = (cb) => {
        let passData = cb
        setUpdateWallet(passData);
        setModalForm({
            ...modalForm,
            title: "Update Wallet",
            isUpdate: true,
            data: modalForm.data.map((data) => (
                {
                    ...data,
                    value: passData[data.key],
                    handleUpdateChange
                }
            ))
        });
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const submitModalForm = (cb, param) => {
        cb.preventDefault()
        if (param) {
            dispatch(updateNewWallet(updateWallet))
        } else {
            dispatch(addNewWallet(newWalletData))
        }
        dispatch(getListWallet())
    };

    return (
        <>
            {
                modalIsOpen && (
                    <Modal
                        formList={modalForm}
                        submitForm={submitModalForm}
                        onCancel={closeModal}
                        onConfirm={closeModal} />
                )
            }
            <div className="features-menu">
                <div className="features-header">
                    <h1>Wallet</h1>
                </div>

                <List title="List Wallet" data={data} updateFunc={updateModal} />
            </div>
        </>
    );
}

export default Wallet;