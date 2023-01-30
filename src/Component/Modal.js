import React, { useState } from 'react';
import './modal.css'
function Modal(props) {
    const [value, setValue] = useState({});
    const func = (e) => {
        console.log("child function",e.target.value);
      };
    return (
        <div className='modal-container'>
            <div className="modal-header">
                <h1>{props.title}</h1>
                <span onClick={() => props.onCancel()}>X</span>
            </div>
            <div className="modal-content">
                {
                    props.isForm &&
                    <form onSubmit={(e) => props.submitForm(e)} className='modal-form'>
                        {
                            props.formList.map((form) => (
                                <div key={form.key} className="modal-form-input">
                                    <label htmlFor={form.key}>{form.label}</label>
                                    <input type={form.type} placeholder={form.key} onChange={(e) => form.func(e)}/>
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