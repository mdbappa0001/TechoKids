import React from 'react';

const Course = ({ course, setPurchase }) => {
    const { name, slots, img, price } = course;
    return (
        <div className="card lg:max-w-lg shadow-xl hover:bg-blue">
            <div className="card-body">
                <img className='w-40 lg:w-28 ml-16 lg:ml-16' src={img} alt="" />
                <h2 className="text-xl font-bold text-center">{name}</h2>
                <p className='text-center'>
                    {
                        slots.length > 0 ? <span>Price : ${price}</span> : <span className='text-red'>Try again in next month</span>
                    }
                </p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'Seats' : 'Seat'} Available</p>
                <div className='card-actions justify-center'>
                    <label
                        onClick={() => setPurchase(course)}
                        disabled={slots.length === 0}
                        for="booking-modal"
                        className="btn btn-sm w-full btn-primary ml-16 mr-16  hover:btn-success">Enroll Now
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Course;