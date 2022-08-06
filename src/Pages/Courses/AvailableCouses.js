import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Course from './Course';
import OpenModal from './OpenModal';

const AvailableCouses = ({ date }) => {
    const [courses, setCourses] = useState([]);
    const [purchase, setPurchase] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/course')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div>
            <h2 className='text-xl lg:text-2xl text-secondary text-center font-bold'>Available Courses on <span className='text-primary'>{format(date, 'PP')}</span> </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 lg:mb-24 ml-8 mr-8 mt-12'>
                {
                    courses.map(course => <Course
                    key={course._id}
                    course={course}
                    setPurchase={setPurchase}
                    ></Course>)
                }
            </div>
            {purchase && <OpenModal 
            date={date} 
            purchase={purchase}
            setPurchase={setPurchase}
            ></OpenModal>}
        </div>
    );
};

export default AvailableCouses;