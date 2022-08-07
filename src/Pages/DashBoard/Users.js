import React, { useEffect, useState } from 'react';
import UsersRow from './UsersRow';

const Users = () => {


    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])

    return (
        <div>
            <h2 className='text-center text-blue text-xl lg:mt-6 mb-4'>All Students : {students.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((student, index) => <UsersRow
                                key={student._id}
                                index={index}
                                student={student}
                            ></UsersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;