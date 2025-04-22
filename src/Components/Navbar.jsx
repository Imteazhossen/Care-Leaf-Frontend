import React from 'react';
import '../assets/logo.png';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100  px-5 md:px-25">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                        <li className='font-bold text-slate-500 '> <NavLink to='/' className={({ isActive }) => isActive ? 'border-b-5 border-indigo-500 ' : ''}>Home</NavLink></li>
                        <li className='font-bold text-slate-500 '> <NavLink to='/mybookings' className={({ isActive }) => isActive ? 'border-b-5 border-indigo-500 ' : ''}>My Booking</NavLink></li>
                        <li className='font-bold text-slate-500 '> <NavLink to='/blogs' className={({ isActive }) => isActive ? 'border-b-5 border-indigo-500 ' : ''}>Blogs</NavLink></li>
                        <li className='font-bold text-slate-500 '> <NavLink to='/contactus' className={({ isActive }) => isActive ? 'border-b-5 border-indigo-500 ' : ''}>Contact Us</NavLink></li>

                    </ul>
                </div>
                <Link to='/'><button className="btn btn-ghost text-xl font-bold"> <img className='w-8' src={logo} alt="" /> PhuDu</button></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-bold text-slate-500 '> <NavLink to='/' className={({ isActive }) => isActive ? 'border-b-5 border-indigo-500 ' : ''}>Home</NavLink></li>
                    <li className='font-bold text-slate-500 '> <NavLink to='/mybookings' className={({ isActive }) => isActive ? 'border-b-5 border-indigo-500 ' : ''}>My Booking</NavLink></li>
                    <li className='font-bold text-slate-500 '> <NavLink to='/blogs' className={({ isActive }) => isActive ? 'border-b-5 border-indigo-500 ' : ''}>Blogs</NavLink></li>
                    <li className='font-bold text-slate-500 '> <NavLink to='/contactus' className={({ isActive }) => isActive ? 'border-b-5 border-indigo-500 ' : ''}>Contact Us</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-primary rounded-full">Emergency</a>
            </div>
        </div>
    );
};

export default Navbar; <h1>Navbar</h1>