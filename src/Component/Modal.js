import React, { useState } from 'react';
import './modal.css'
function Modal(props) {
    const [value, setValue] = useState({});
    return (
        <div className='modal-container'>
            <div className="modal-header">
                <h1>{props.formList.title}</h1>
                <span onClick={() => props.onCancel()}>X</span>
            </div>
            <div className="modal-content">
                {
                    props.formList.isForm &&
                    <form onSubmit={(e) => props.submitForm(e,props.formList.isUpdate)} className='modal-form'>
                        {
                            props.formList.data.map((form) => (
                                <div key={form.key} className="modal-form-input">
                                    <label htmlFor={form.key}>{form.label}</label>
                                    <input
                                        name={form.key}
                                        type={form.type}
                                        placeholder={form.key}
                                        onChange={form.handleUpdateChange}
                                        defaultValue={form.value}/>
                                </div>
                            ))
                        }
                        <button>Save</button>
                    </form>
                }
            </div>
        </div>
    );
}

export default Modal;