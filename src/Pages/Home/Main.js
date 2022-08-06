import React from 'react';
import student from "../../images/student.png";
import teacher from "../../images/teacher.png";
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <>
            <div className=' bg-blue pt-16'>

                <p className='text-center lg:mt-28 text-white text-3xl lg:text-5xl font-bold'>Welcome to Techokids</p>

                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-16 mx-12 lg:mx-32 pb-52 mt-12 lg:mt-16'>

                        <div className="card bg-gray shadow-xl">
                            <div className="card-body">
                                <div className='flex items-center justify-between'>
                                    <img className='w-16 lg:w-24' src={student} alt="" />
                                    <div className='mr-12 mt-8'>
                                        <h2 className='text-xl lg:text-2xl font-bold mb-4'>
                                            Student Login
                                        </h2>
                                        <button class="btn btn-active btn-ghost ml-4 lg:ml-6">
                                            <Link to={`/studentLogin`}>Login Here</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-gray shadow-xl">
                            <div className="card-body">
                                <div className='flex items-center justify-between'>
                                    <img className='w-16 lg:w-24' src={teacher} alt="" />
                                    <div className='mr-12 mt-8'>
                                        <h2 className='text-xl lg:text-2xl font-bold mb-4'>Teacher Login</h2>
                                        <button class="btn btn-active btn-ghost ml-4 lg:ml-6">
                                            <Link to={`/teacherLogin`}>Login Here</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
};

export default Main;