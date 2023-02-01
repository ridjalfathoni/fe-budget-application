import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '../Component/List';
import Modal from '../Component/Modal';
import { addNewWallet, getListWallet, updateNewWallet, deleteWalletByID } from '../Redux/Wallet';
import './wallet.css'

function Wallet(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [newWalletData, setNewWalletData] = useState({})
    const [updateWallet, setUpdateWallet] = useState({})
    const [modalData, setModalData] = useState({})
    const [modalForm, setModalForm] = useState({
        isForm: true,
        title: "Add Wallet",
        page: "wallet",
        isUpdate: false,
        data: []
    })
    const { data } = useSelector((state) => state.wallet);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getListWallet())
    }, [dispatch])

    const handleDelete = async (id) => {
        await dispatch(deleteWalletByID({id: id}))
        await dispatch(getListWallet())
    }

    const handleOnChangeModal = (e,isUpdate) => {
        const { name, value } = e.target;
        if (isUpdate) {
            setModalData((prev) => ({
                ...prev,
                id:prev._id,
                [name]:value
            }))
        } else {
            setModalData((prev) => ({
                ...prev,
                [name]:value
            }))
        }
    }
    
    const updateModal = (cb) => {
        let passData = cb
        setModalData(passData);
        setModalForm({
            ...modalForm,
            title: "Update Wallet",
            isUpdate: true,
            data: [
                {
                    key: "name",
                    label: "Wallet Name",
                    type: "text",
                    isInput: true,
                    value: passData.name,
                    handleOnChangeModal
                },
                {
                    key: "balance",
                    label: "Amount",
                    type: "Number",
                    isInput: true,
                    value: passData.balance,
                    handleOnChangeModal
                }
            ]
        });
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const submitModalForm = async (cb, param) => {
        cb.preventDefault()
        
        if (!param) {
            await dispatch(addNewWallet(modalData))
        } else {
            await dispatch(updateNewWallet(modalData))
        }
        await dispatch(getListWallet());
        
    };

    const handleAdd = () => {
        setModalData({
            name: "",
            balance: 0
        });
        setModalForm({
            ...modalForm,
            title: "Add New Wallet",
            isUpdate: false,
            data: [
                {
                    key: "name",
                    label: "Wallet Name",
                    type: "text",
                    isInput: true,
                    handleOnChangeModal
                },
                {
                    key: "balance",
                    label: "Amount",
                    type: "Number",
                    isInput: true,
                    handleOnChangeModal
                }
            ]
        })
        setModalIsOpen(true)
    }

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
                    <button className='btn-add' onClick={handleAdd}>Add</button>
                </div>

                <List title="List Wallet" data={data} updateFunc={updateModal} deleteFunc={handleDelete}/>
            </div>
        </>
    );
}

export default Wallet;