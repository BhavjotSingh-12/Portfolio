import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";
const Navbar = () => {

    return (
        <div className=" flex flex-row navbarcs mx-[13%]">
            <div className='gap-3 sm:gap-4 text-[13px] sm:text-[15px] md:text-[20px] text-[white] mt-5 flex flex-row md:gap-8'>
                <button className='button'><Link to="/" >Home</Link></button>
                <button className='button'><Link to="/About ">About</Link></button>
                <button className='button'><Link to="/Projects ">Projects</Link></button>
                <button className='button'><Link to="/Resume ">Resume</Link></button>
                <button className='button'><Link to="/Contact">Contact</Link></button>
            </div>
        </div>
    )
}

export default Navbar
