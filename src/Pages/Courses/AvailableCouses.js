import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Course from './Course';

const AvailableCouses = ({ date }) => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div>
            <h2 className='text-xl text-secondary text-center font-bold'>Available Courses on {format(date, 'PP')} </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 lg:mb-24 ml-8 mr-8 mt-12'>
                {
                    courses.map(course => <Course
                    key={course._id}
                    course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default AvailableCouses;