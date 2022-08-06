import React from 'react';
import image from "../../images/image.png";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const CoursesBanner = ({ date, setDate }) => {

    return (
        <div className="mt-12 mb-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} className="max-w-sm lg:ml-36 rounded-lg shadow-2xl" alt='Dentist Chair' />
                <div>
                    <DayPicker
                        mode='single'
                        selected={date}
                        onSelect={setDate}
                    />

                </div>
            </div>
        </div>
    );
};

export default CoursesBanner;