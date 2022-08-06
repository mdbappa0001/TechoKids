import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';
import logo from "../images/logo.png";

const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
      };

    const menuItems = <>
    <li className='text-black font-bold text-xl'><Link to="/">Home</Link></li>
    {user && <li className='text-black font-bold text-xl'><Link to="/schedule">Schedule</Link></li>}
    <li className='text-black font-bold text-xl'><Link to="/dashboard">DashBoard</Link></li>
   <li>
   {user ? 
        <button className='w-24 lg:w-32' onClick={logout}><span className='text-black font-bold lg:text-xl mr-0'>Sign Out</span></button>:
        <Link className='text-black ml-4 font-bold lg:text-xl lg:mt-3' to="/login"></Link>}
   </li>

</>

    return (
        <>
             <div className="navbar bg-blue sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                {/* <img  src={logo} alt="" /> */}
               <img className='w-40' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 ml-96">
                    {menuItems}
                </ul>
            </div>
        </div>
        </>
    );
};

export default Navbar;