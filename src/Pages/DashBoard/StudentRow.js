import React from 'react';


const StudentRow = ({ user, index }) => {


    const { name,img,slots, price } = user;

    return (
        <tr>
            <th>{index + 1}</th>
            <img className='w-12' src={img} alt="" />
            <td>{name}</td>
            <td>${price}</td>
            <td>{slots.length}</td>
        </tr>
    );
};

export default StudentRow;