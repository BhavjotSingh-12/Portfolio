import "./Home.css";
import React from 'react'
import Navbar from './Navbar'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FiMail } from "react-icons/fi"
const Home = () => {
    return (
        <div className="Homecs fontstyl">
            <div className="flex flex-col w-full h-[100vh] text-[white]">
                <div className="mx-[13%] mt-[200px] font-medium text-[25px] sm:text-[60px] md:text-[80px] ">Bhavjot Singh</div>
                <div className='mx-[13%] text-[15px] sm:text-[20px] md:text-[30px] '>I'm a FrontEnd Web Developer</div>
                <Navbar />
                <div className="flex flex-row gap-[20px] md:gap-[35px] mx-[13%] mt-[2%]">
                    <a href="https://github.com/BhavjotSingh-12"><AiFillGithub className='w-[35px] h-[35px] logos' /></a>
                    <a href="https://www.linkedin.com/in/bhavjot-singh-166b05228"><AiFillLinkedin className='w-[35px] h-[35px] logos' /></a>
                    <a href="mailto:bhavjot861@gmail.com"><FiMail className='w-[35px] h-[35px] logos'/></a>

                </div>
            </div>
        </div>

    )
}

export default Home