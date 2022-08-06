import React, { useState } from 'react';
import AvailableCouses from './AvailableCouses';
import CoursesBanner from './CoursesBanner';

const Schedule = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <CoursesBanner date={date} setDate={setDate}></CoursesBanner>
            <AvailableCouses date={date}></AvailableCouses>
        </div>
    );
};

export default Schedule;