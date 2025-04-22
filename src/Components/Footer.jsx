import React from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/logo.png'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSnapchatSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-white text-base-content rounded p-10">
            <div>
            <NavLink to='/'><button className="btn btn-ghost text-xl font-bold"> <img className='w-8' src={logo} alt="" /> PhuDu</button></NavLink>
            </div>
            <nav className="grid grid-flow-col gap-4 ">
                <ul className='flex space-x-5'>
                    <li className=' text-slate-500 '> <NavLink to='/' className={({ isActive }) => isActive ? 'border-b-5 border-indigo-500 ' : ''}>Home</NavLink></li>
                    <li className=' text-slate-500 '> <NavLink to='/mybookings' className={({ isActive }) => isActive ? 'border-b-5 border-indigo-500 ' : ''}>My Booking</NavLink></li>
                    <li className=' text-slate-500 '> <NavLink to='/blogs' className={({ isActive }) => isActive ? 'border-b-5 border-indigo-500 ' : ''}>Blogs</NavLink></li>
                    <li className=' text-slate-500 '> <NavLink to='/contactus' className={({ isActive }) => isActive ? 'border-b-5 border-indigo-500 ' : ''}>Contact Us</NavLink></li>
                </ul>   
            </nav>
            <nav className='border-t-2 border-slate-300 border-solid pt-10 w-8/12'>
                <div className="grid grid-flow-col gap-4">
                     <a href='https://www.instagram.com/_imteaz_hossen_?igsh=MWRpc2s5OWZqdmc0Mw==' target='_blank'>
                     <FaSquareInstagram  size={32}/>
                    </a>
                    <a href=' https://www.facebook.com/share/1Bhu5DbyDT/' target='_blank'>
                    <FaFacebookSquare size={30}/>
                    </a>
                    <a href='https://www.snapchat.com/add/imteazhossain81?share_id=z58LevyEMQg&locale=en-US' target='_blank'>
                    <FaSnapchatSquare  size={30}/>
                    </a>
                    <a href=' https://www.facebook.com/share/1Bhu5DbyDT/' target='_blank'>
                    <FaLinkedin  size={30}/>
                    </a>
                </div>
            </nav>
            
        </footer>
    );
};

export default Footer;