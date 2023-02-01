import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '../Component/List';
import Modal from '../Component/Modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getListWallet } from '../Redux/Wallet';
import { addNewTransactions, deleteTransactionsByID, getAllTransactions, updateTransactions } from '../Redux/Transactions';
import { getListCategory, updateCategory } from '../Redux/Category';

function Transactions(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalData, setModalData] = useState({})
    const { data } = useSelector((state) => state.transactions);

    const [modalForm, setModalForm] = useState({
        isForm: true,
        title: "Add New Transactions",
        page: "transactions",
        isUpdate: false,
        data: []
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllTransactions());
        dispatch(getListWallet())
        dispatch(getListCategory())
    }, [dispatch])

    const handleAdd = () => {
        setModalData({
            name: "",
            type: "",
            icon: ""
        });
        setModalForm({
            ...modalForm,
            title: "Add New Transactions",
            isUpdate: false,
            data: [
                {
                    key: "name",
                    label: "Category Name",
                    type: "text",
                    isInput: true,
                    isSelect: false,
                    isImg: false,
                    handleOnChangeModal
                },
                {
                    key: "type",
                    label: "Type",
                    type: "select",
                    isInput: false,
                    isSelect: true,
                    isImg: false,
                    handleOnChangeModal
                },
                {
                    key: "icon",
                    label: "Icon",
                    type: "file",
                    isInput: false,
                    isSelect: false,
                    isImg: true,
                    handleOnChangeModal
                }
            ]
        })
        setModalIsOpen(true)
    }
    const closeModal = () => {
        setModalIsOpen(false);
    }

    const handleDelete = async (id) => {
        dispatch(deleteTransactionsByID({id: id}))
        dispatch(getAllTransactions())
    }

    const handleOnChangeModal = (e, isUpdate) => {
        const { name, value, files } = e.target;
        
        if (isUpdate) {
            setModalData((prev) => ({
                ...prev,
                id: prev._id,
                [name]: value,
                ...(files && {icon: files[0]})
            }))
        } else {
            setModalData((prev) => ({
                ...prev,
                [name]: value,
                ...(files && {icon: files[0]})
            }))
        }
        
    }

    const updateModal = (cb) => {
        let passData = cb
        
        setModalData(passData);
        setModalForm({
            ...modalForm,
            title: "Update Transactions",
            isUpdate: true,
            data: [
                {
                    key: "wallet_id",
                    label: "Wallet",
                    type: "select",
                    isInput: false,
                    isSelect: true,
                    isImg: false,
                    value: passData.wallet_id,
                    handleOnChangeModal
                },
                {
                    key: "category",
                    label: "Category",
                    type: "select",
                    isInput: false,
                    isSelect: true,
                    isImg: false,
                    handleOnChangeModal
                },
                {
                    key: "amount",
                    label: "Amount",
                    type: "number",
                    isInput: true,
                    isSelect: false,
                    isImg: false,
                    handleOnChangeModal
                },
                {
                    key: "description",
                    label: "Description",
                    type: "text",
                    isInput: true,
                    isSelect: false,
                    isImg: false,
                    handleOnChangeModal
                }
            ]
        });
        setModalIsOpen(true);
    }

    const submitModalForm = async (cb, param) => {
        cb.preventDefault();
        
        if (param) {
            dispatch(updateTransactions(modalData))
        } else {
            dispatch(addNewTransactions(modalData))
        }
        dispatch(getAllTransactions())
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
                    <h1>Transactions</h1>
                    <button className='btn-add' onClick={handleAdd}>Add</button>
                </div>

                <List title="Recent Transactions" data={data} updateFunc={updateModal} deleteFunc={handleDelete} />
            </div>
        </>
    );
}

export default Transactions;