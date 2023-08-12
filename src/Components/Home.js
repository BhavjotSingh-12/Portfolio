import "./Home.css";
import React from 'react'
import Navbar from './Navbar'
import github2 from '../assets/github2.png'
import mail from '../assets/mail.jpeg'
import linkedin from '../assets/linkedin.png'
const Home = () => {
    return (
        <div className="Homecs fontstyl">
            <div className="flex flex-col w-full h-[100vh] text-[white]">
                <div className="mx-[13%] mt-[200px] font-medium text-[60px] md:text-[80px] ">Bhavjot Singh</div>
                <div className='mx-[13%] text-[20px] md:text-[30px] '>I'm a FrontEnd Web Developer</div>
                <Navbar />
                <div className="flex flex-row gap-[35px] mx-[13%] mt-[2%]">
                    <a href="https://github.com/BhavjotSingh-12"><img src={github2} alt="" /></a>
                    <a href="https://www.linkedin.com/in/bhavjot-singh-166b05228"><img src={linkedin} alt="" /></a>
                    <a href="mailto:bhavjot861@gmail.com"><img src={mail} alt="" /></a>

                </div>
            </div>
        </div>

    )
}

export default Home