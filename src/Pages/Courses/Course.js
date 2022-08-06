import React from 'react';

const Course = ({course}) => {
    const {name, slots, img} = course;
    return (
        <div class="card lg:max-w-lg shadow-xl hover:bg-blue">
        <div class="card-body">
          <img className='w-32 lg:w-28 ml-24 lg:ml-16' src={img} alt="" />
          <h2 class="card-title">{name}</h2>
        </div>
      </div>
    );
};

export default Course;