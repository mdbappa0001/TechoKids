import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Components/Loading';
import auth from '../../Firebase/Firebase.init';

const MyCourses = () => {
    const [user] = useAuthState(auth)
    const [courses, setCourses] = useState([])

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/enroll?student=${user.email}`)
                .then(res => res.json())
                .then(data => setCourses(data))
        }
    }, [user])

    if (!user) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-blue ml-6 lg:text-xl mt-4 mb-4'>Hello, <span className='text-red'>{user?.displayName}</span>. You have <span className='text-red'>{courses?.length}</span> enrolled courses.</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Course Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map((a, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{a.studentName}</td>
                                    <td>{a.courseName}</td>
                                    <td>{a.date}</td>
                                    <td>{a.slot}</td>
                                    <td>{a.grade}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCourses;