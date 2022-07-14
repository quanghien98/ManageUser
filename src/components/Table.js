import React from 'react';


function Table({ dataTBody, deleteUser, checkId, ids, callInitUser }) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Settings</th>
                </tr>
            </thead>
            <tbody>
                {dataTBody.map((user, index) =>
                (
                    <tr key={user.id}>
                        <td>
                            <input onChange={(e) => {
                                checkId({
                                    checked: e.target.checked,
                                    id: user.id
                                })
                            }} className="form-check-input" type="checkbox" id={user.id}
                                checked={ids.includes(user.id)}
                            />
                        </td>
                        <td>{user.name || ''}</td>
                        <td>{user.email || ''}</td>
                        <td>{user.phone || ''}</td>
                        <td>
                            <div className="d-flex gap-2">
                                <button onClick={() => callInitUser(user)} data-bs-toggle="modal" data-bs-target="#modalEditUser" className="btn btn-yellow">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </button>
                                <button onClick={() => deleteUser({ id: user.id })} className="btn btn-red">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                                    </svg>

                                </button>
                            </div>
                        </td>
                    </tr>

                )
                )}
            </tbody>
        </table>

    );
}

export default Table;