import React, { useEffect, useState } from 'react';
import StudentRow from './StudentRow';

const Students = () => {

    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/enroll")
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])

    return (
        <div>
            <h2>All Students: {students?.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Course Name</th>
                            <th>Status</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        students.map((student, index) => <StudentRow 
                        key={student._id}
                        index={index}
                        student={student}
                        ></StudentRow>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Students;