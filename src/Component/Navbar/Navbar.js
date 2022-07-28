
import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    const menuItems = <>
        
        <li><NavLink to="/home">Home</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start text-2xl mx-auto">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>MANUBAR
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-[150px]">
                        {menuItems}
                    </ul>
                </div>
            
            </div>
                
            <div className="navbar-center ml-10 mr-auto hidden  items-center lg:flex text-xl mb-4 mt-4 ">
                <ul className="menu menu-horizontal p-0 ">
                {menuItems}
                </ul>

            </div>

          
             
        </div>
    );
};

export default Navbar;