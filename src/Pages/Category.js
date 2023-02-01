import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '../Component/List';
import Modal from '../Component/Modal';
import { addNewCategory, deleteCategory, getListCategory, updateCategory } from '../Redux/Category';

function Category(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalData, setModalData] = useState({})
    const { data } = useSelector((state) => state.category);

    const [modalForm, setModalForm] = useState({
        isForm: true,
        title: "Add New Category",
        page: "category",
        isUpdate: false,
        data: []
    })

    const dispatch = useDispatch()

    useEffect(() => {
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
            title: "Add New Category",
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
        await dispatch(deleteCategory({id: id}))
        await dispatch(getListCategory())
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
            title: "Update Category",
            isUpdate: true,
            data: [
                {
                    key: "name",
                    label: "Category Name",
                    type: "text",
                    isInput: true,
                    isSelect: false,
                    isImg: false,
                    value: passData.name,
                    handleOnChangeModal
                },
                {
                    key: "type",
                    label: "Type",
                    type: "select",
                    isInput: false,
                    isSelect: true,
                    isImg: false,
                    value: passData.type,
                    handleOnChangeModal
                },
                {
                    key: "icon",
                    label: "Icon",
                    type: "file",
                    isInput: false,
                    isSelect: false,
                    isImg: true,
                    value: passData.icon,
                    handleOnChangeModal
                }
            ]
        });
        setModalIsOpen(true);
    }

    const submitModalForm = async (cb, param) => {
        cb.preventDefault();
        
        if (param) {
            await dispatch(updateCategory(modalData))
        } else {
            await dispatch(addNewCategory(modalData))
        }
        await dispatch(getListCategory())
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
                    <h1>Category</h1>
                    <button className='btn-add' onClick={handleAdd}>Add</button>
                </div>

                <List title="List Wallet" data={data} updateFunc={updateModal} deleteFunc={handleDelete} />
            </div>
        </>
    );
}

export default Category;