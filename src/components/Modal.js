import React, { useEffect, useState } from 'react';
import Input from './Input'
import { FAKE_USER, customRegex, validate } from './../helper/const'

function Modal({ initUser, changeUsers }) {

    const [user, setUser] = useState({ ...FAKE_USER })

    useEffect(() => {
        setUser(initUser)
    }, [initUser])

    const handleChangeValue = ({ name, value }) => {
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }))
    }

    const handleOnClose = () => {
        setUser({ ...FAKE_USER })
    }

    return (
        <div className="modal fade" id="modalEditUser" tabIndex={-1} aria-labelledby="modalEditUser" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal User</h5>
                        <button onClick={handleOnClose} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <div className='form'>
                            <Input type="text" name='name' cb={handleChangeValue} label="Full Name" value={user.name} />
                            {!customRegex(user.name, 'name') && <div className='error-text'>Full Name is not valid</div>}
                            <Input type="email" name='email' cb={handleChangeValue} label="Email" value={user.email} />
                            {!customRegex(user.email, 'email') && <div className='error-text'>Email is not valid</div>}
                            <Input type="text" name='phone' cb={handleChangeValue} label="Phone" value={user.phone} />
                            {!customRegex(user.phone, 'phone') && <div className='error-text'>Phone is not valid</div>}
                        </div>

                    </div>
                    <div className="modal-footer">
                        <div className="d-flex  gap-2">
                            <button id='modal-btn-close' onClick={handleOnClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>

                            </button>
                            <button onClick={() => {
                                validate() && changeUsers(user)
                            }} type="submit" value='Submit' className="btn btn-yellow">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;