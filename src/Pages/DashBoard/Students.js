import React, { useEffect, useState } from 'react';
import StudentRow from './StudentRow';

const Students = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://guarded-tundra-47741.herokuapp.com/course")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <h2 className='text-center text-blue text-xl lg:mt-6 mb-4'>ALL COURSES: <span>{users?.length}</span> </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Seats</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <StudentRow
                                key={user._id}
                                index={index}
                                user={user}
                            ></StudentRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Students;