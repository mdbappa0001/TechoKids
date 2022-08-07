import React, { useState } from 'react';


const StudentRow = ({ student, index }) => {

    const [state, setState] = useState(true);

    const toggle = () => {
        setState(!state)
    }

    const { studentName, courseName, date } = student;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{date}</td>
            <td>{studentName}</td>
            <td>{courseName}</td>
            <td><span
                onClick={toggle}>
                {state ? <p className='bg-red w-16 text-center rounded-full text-white'>Absent</p> : <p className='bg-blue w-16 text-center rounded-full text-white'>Present</p>}
            </span></td>
            <td><button className='btn btn-xs rounded-full btn-primary'>Make Admin</button></td>
        </tr>
    );
};

export default StudentRow;