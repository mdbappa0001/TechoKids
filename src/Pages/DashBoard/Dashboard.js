import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                <h2 className='text-3xl text-primary text-center mt-4 font-bold'>Welcome To Dashboard</h2>
                <Outlet></Outlet>

            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-56 bg-base-300 font-bold">
                    {/* <!-- Sidebar content here --> */}
                    <li className='bg-success rounded mt-4 hover:text-white hover:bg-red mb-5'><Link to="/dashboard">My Coueses</Link></li>
                    <li className='bg-success rounded hover:text-white hover:bg-red '><Link to="/dashboard/profile">My Profile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;