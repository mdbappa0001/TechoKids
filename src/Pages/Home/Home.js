import React from 'react';
import logo from "../../images/logo.png";
import student from "../../images/student.png";
import teacher from "../../images/teacher.png";


const Home = () => {
    return (
        <>
            <div className=' bg-blue pt-16'>

                <div className='ml-36 lg:ml-40 mb-12 lg:mb-24'>
                    <img className='w-32 lg:w-48' src={logo} alt="" />
                </div>

                <p className='text-center text-3xl lg:text-5xl font-bold'>Welcome to Techokids</p>

                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-16 mx-12 lg:mx-32 pb-52 mt-12  lg:mt-24'>

                        <div className="card bg-gray shadow-xl">
                            <div className="card-body">
                                <div className='flex items-center justify-between'>
                                    <img className='w-16 lg:w-24' src={student} alt="" />
                                    <div className='mr-12 mt-8'>
                                    <h2 className='text-xl lg:text-2xl font-bold mb-4'>Student Login</h2>
                                    <button class="btn btn-active btn-ghost ml-4 lg:ml-6">Login Here</button>
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
                                    <button class="btn btn-active btn-ghost ml-4 lg:ml-6">Login Here</button>
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

export default Home;