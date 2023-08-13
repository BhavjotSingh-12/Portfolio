import React from 'react'
import './About.css'
import Navbar from './Navbar'
import { TbArrowBigRightFilled } from "react-icons/tb";
import Image from './Image';

const About = () => {
  return (
    <div className='Aboutcs w-full text-[white] py-3'>
      <Navbar></Navbar>
      <div className=' md:mx-[10%] mx-4 my-[3%] bg-black rounded-[10px] opacity-90 fonts'>
        <div className='md:m-[20px] m-[12px] p-6 text-[20px] '>
          <div>About</div>
          <div className="flex flex-col md:justify-between lg:flex-row mt-3">
            <div>
              <div className='h-[400px] md:h-[600px] lg-[510px] w-[200px] sm:w-[350px] md:w-[540px] lg:w-[350px] addimg' />
            </div>
            <div className='md:ml-10'>
              <h1 className='md:text-[40px] text-[20px] md:font-bold'>More About Me</h1>
              <h3 className='text-[#49def8] font-bold md:text-[20px] text-[15px]'>Hello! I'm Bhavjot Singh</h3>
              <div className='mt-2 text-[15px] md:text-[20px] '>I am an engineering student in Computer Science Engineering from Maharaja Agrasen Institute of Technology ,GGSIPU.</div>
              <div className="flex flex-col md:flex-row mt-4 ">
                <div>
                  <div className="flex flex-col md:mt-4 md:mr-4 ">
                    <div className="flex flex-row">
                      <TbArrowBigRightFilled className='mt-[2px] md:mt-[6px] md:mr-2' color='#49def8' />
                      <div className='text-[12px] mt-[4px] md:mt-0 md:text-[20px]'>Birthday: 23 August 2002</div>
                    </div>
                    <div className="flex flex-row">
                      <TbArrowBigRightFilled className='mt-[2px] md:mt-[6px] md:mr-2' color='#49def8' />
                      <div className='text-[12px] mt-[4px] md:mt-0 md:text-[20px]'>Degree: BTech CSE</div>
                    </div>
                  </div>
                </div>
                <div >
                  <div className="flex flex-col mt-4 md:ml-[100px]">
                    <div className="flex flex-row">
                      <TbArrowBigRightFilled className='mt-[2px] md:mt-[6px] md:mr-2' color='#49def8' />
                      <div className='text-[12px] mt-[4px] md:mt-0 md:text-[20px]'>City: Haridwar</div>
                    </div>
                    <div className="flex flex-row">
                      <TbArrowBigRightFilled className='mt-[2px] md:mt-[6px] md:mr-2' color='#49def8' />
                      <div className='text-[12px] mt-[4px] md:mt-0 md:text-[20px]'>Email: bhavjot861@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-5 md:text-[20px] text-[16px]'>
                I'm Bhavjot Singh, I'm a web developer proficient in HTML, CSS and JavaScript.
                I have strong passion for React.js and love building websites with it.
                My journey in web development has allowed me to blend innovation and technical
                expertise seamlessly, resulting in captivating and user-friendly websites.
                Apart from this, I'm a hardworking person which allows me to improve my web development
                skills and also excel in other fields.I'm always eager to expand my knowledge and skills in the tech world.
                Thank you for visiting my portfolio. Feel free to explore my projects and don't hesitate to get in touch if you'd
                like to collaborate or have any questions.

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:mx-[10%] mx-4 my-[3%] bg-black rounded-[10px] opacity-90 fonts'>
        <Image />
      </div>
    </div>





  )
}

export default About