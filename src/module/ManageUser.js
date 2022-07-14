import React, { useState } from 'react';
import Table from '../components/Table';
import Modal from '../components/Modal'
import { FAKE_USER } from './../helper/const'

const FAKE_DATA = [
    { id: 1, name: 'Henry Ngo', email: 'nqhien98@gmail.com', phone: '0366527718' },
    { id: 2, name: 'Vince Ngo', email: 'nqvinh94@gmail.com', phone: '0366527719' }
]



function ManageUser(props) {

    const [users, setUsers] = useState([...FAKE_DATA])

    const [ids, setIds] = useState([])

    const [initUser, setInitUser] = useState({ ...FAKE_USER })

    const handleDeleteUser = ({ id }) => {
        setUsers((prevUsers) => {
            return prevUsers.filter(user => user.id !== id)
        })
    }

    const handleCheckIds = ({ checked, id }) => {
        return checked ? setIds((prevIds) => [...prevIds, id]) : setIds((prevIds) => prevIds.filter(prevId => prevId !== id))
    }

    const handleDeleteRow = () => {
        setUsers((prevUsers) => prevUsers.filter(user => !ids.includes(user.id)))
    }

    const handleChangeUsers = (user) => {
        if (user.id === 0) {
            setUsers((prevUsers) => [...prevUsers, { ...user, id: prevUsers.length + 1 }])
        }
        else {
            setUsers((prevUsers) => {
                const newState = prevUsers.map(obj => {
                    if (obj.id === user.id) {
                        return { ...user }
                    }
                    return obj
                })
                return newState
            })
        }
        document.getElementById('modal-btn-close').click()

    }

    const handleInitUser = (user) => {
        setInitUser((prev) => {
            return { ...prev, ...user }
        })
    }



    return (
        <div className="container">
            <div className="title">
                <h1>Manage Users</h1>
            </div>
            <div className="manage-user">
                <div className="manage-user-buttons">
                    <button type='button' data-bs-toggle="modal" data-bs-target="#modalEditUser" className="btn btn-green">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </button>
                    <button onClick={handleDeleteRow} className="btn btn-red">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>

                    </button>
                </div>

                <div className="manage-user-table">
                    <Table
                        ids={ids}
                        checkId={handleCheckIds}
                        dataTBody={users}
                        deleteUser={handleDeleteUser}
                        callInitUser={handleInitUser}
                    />
                </div>

                <Modal
                    initUser={initUser}
                    changeUsers={handleChangeUsers}
                />

            </div>
        </div>
    );
}

export default ManageUser;