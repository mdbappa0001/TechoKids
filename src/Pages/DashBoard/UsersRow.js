import React, { useState } from 'react';


const UsersRow = ({ student, index }) => {

    const [state, setState] = useState(true);
    

    const toggle = () => {
        setState(!state)
    }

    const { email } = student;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td><span
                onClick={toggle}>
                {state ? <p className='bg-red w-16 text-center rounded-full text-white'>Absent</p> : <p className='bg-blue w-16 text-center rounded-full text-white'>Present</p>}
            </span></td>
            <td><button className='btn btn-xs rounded-full btn-primary'>Make Admin</button></td>
        </tr>
    );
};

export default UsersRow;