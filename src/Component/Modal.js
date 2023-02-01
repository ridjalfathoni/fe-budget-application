import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './modal.css'

function Modal(props) {
    const walletData = useSelector((state) => state?.[props.formList.page]?.data);

    return (
        <div className='modal'>

            <div className='modal-container'>
                <div className="modal-header">
                    <h1>{props.formList.title}</h1>
                    <span onClick={() => props.onCancel()}>X</span>
                </div>
                <div className="modal-content">
                    {
                        props.formList.isForm &&
                        <form onSubmit={(e) => props.submitForm(e, props.formList.isUpdate)} encType='multipart/form-data' className='modal-form'>
                            {
                                props.formList.data.map((form) => (
                                    <div key={form.key} className="modal-form-input">
                                        <label key={`label-${form.key}`} htmlFor={form.key}>{form.label}</label>
                                        {
                                            form.isInput && (
                                                <input
                                                    name={form.key}
                                                    type={form.type}
                                                    placeholder={form.key}
                                                    onChange={(e) => form.handleOnChangeModal(e, props.formList.isUpdate)}
                                                    defaultValue={form.value} />
                                            )
                                        }
                                        {
                                            form.isSelect && (
                                                // <select key={`select-${form.key}`} onChange={handleChange}>
                                                <select key={`select-${form.key}`} name={form.key} onChange={(e) => form.handleOnChangeModal(e, props.formList.isUpdate)} defaultValue={form.value}>
                                                    {
                                                        props.formList.page == "wallet" && (
                                                            walletData.map((data, k) => (
                                                                <option key={`option-${form.key}-${k}`} value={data.id}>{data.name}</option>
                                                            ))
                                                        )
                                                    }
                                                    {
                                                        props.formList.page == "category" && (
                                                            <>
                                                                <option key="default" value="">Select Category Type</option>
                                                                <option key="income" value="income">Income</option>
                                                                <option key="expense" value="expense">Expense</option>
                                                            </>
                                                        )
                                                    }
                                                </select>
                                            )
                                        }
                                        {
                                            form.isDate && (
                                                <DatePicker className='form-date' selected={new Date()} onChange={form.handleUpdateChange} />
                                            )
                                        }
                                        {
                                            form.isImg && (
                                                <>
                                                    {
                                                        form.value && (
                                                            <img className='modal-img' src={`data:image/jpeg;base64,${form.value}`} />
                                                        )
                                                    }
                                                    <input
                                                        name={form.key}
                                                        type={form.type}
                                                        placeholder={form.key}
                                                        onChange={(e) => form.handleOnChangeModal(e, props.formList.isUpdate)}
                                                        />
                                                </>
                                            )
                                        }
                                    </div>
                                ))
                            }
                            <button>Save</button>
                        </form>
                    }
                </div>
            </div>
        </div>
    );
}

export default Modal;