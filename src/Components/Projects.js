import React from 'react'
import './Projects.css'
import netflix from '../assets/netflix.jpg'
import formax from '../assets/Formax.jpg'
import launch from '../assets/Launch.jpg'
import google from '../assets/google.jpg'
import utube from '../assets/youtube.jpg'
import utils from '../assets/utils.jpg'
import Navbar from './Navbar'
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';

const Projects = () => {
  return (
    <div className='projectcs w-full py-3'>
      <Navbar />
      <div className='mx-[10%] md:my-[3%] py-3'>
        <div className="bg-black pb-5 opacity-90 rounded-[10px] ">
          <div className='text-white text-[40px] px-6 py-4 md:mx-3'>My Projects</div>

          <div className="flex flex-col md:flex-row  md:px-5 pt-2 md:pt-6 md:my-5 md:py-3">
            <div className="flex card justify-between pt-2 md:pt-0 mx-4 md:mx-10">
              <img className="img w-[150px] sm:w-[200px]" src={netflix} alt="" />
              <div className='text '>
                <div className='flex flex-row md:justify-center mt-[100px] ml-[20%]  md:ml-0 gap-2 md:gap-4'>
                  <a href="https://github.com/BhavjotSingh-12/Netflix-Clone"><AiFillGithub className='md:w-[45px] logos md:h-[45px]' /></a>
                  <a href="https://bmy-flix.netlify.app/"> <AiOutlineLink className='md:w-[45px] logos md:h-[45px]' /></a>
                </div>
                <div className="content w-[500px] justify-center m-1 hidden md:block">
                  My-Flix is a fully responsive project built using only HTML and CSS.
                  The project aims to create a clone of a specific website and replicating
                  its design and layout.
                </div>
              </div>
            </div>
            <div className="flex card  mx-4 pt-2 md:pt-0 md:mx-10">
              <img className="img w-[150px] sm:w-[200px]" src={utube} alt="" />
              <div className='text'>
                <div className='flex flex-row md:justify-center mt-[100px] ml-[20%]  md:ml-0 gap-2 md:gap-4'>
                  <a href="https://github.com/BhavjotSingh-12/youtubeclone"><AiFillGithub className='md:w-[45px] logos md:h-[45px]' /></a>
                  <a href="https://utubebhav.netlify.app/"> <AiOutlineLink className='md:w-[45px] logos md:h-[45px]' /></a>
                </div>
                <div className="content w-[500px]  justify-between m-2 hidden md:block">
                  U-Tube is a fully responsive and functional frontend project, a clone of Youtube
                  made using react. Includes API integration and allows user to serach and play
                  videos.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  md:px-5 md:pt-6 md:my-5 md:py-3">
            <div className="flex card mx-4 pt-2 md:pt-0 md:mx-10">
              <img className="img w-[150px] sm:w-[200px]" src={launch} alt="" />
              <div className='text'>
                <div className='flex flex-row md:justify-center mt-[100px] ml-[20%] md:ml-0 gap-2 md:gap-4'>
                  <a href="https://github.com/BhavjotSingh-12/launch"><AiFillGithub className='md:w-[45px] logos md:h-[45px]' /></a>
                  <a href="https://launchpay.netlify.app/"> <AiOutlineLink className='md:w-[45px] logos md:h-[45px]' /></a>
                </div>
                <div className="content w-[500px] justify-between hidden md:block m-2">
                  Launch is a payment gateway landing page. Not responsive made with
                  the help of HTML and CSS. Basic moto of this project is to learn about animations.
                </div>
              </div>
            </div>
            <div className="flex card mx-4 pt-2 md:pt-0 md:mx-10">
              <img className="img w-[150px] sm:w-[200px]" src={google} alt="" />
              <div className='text'>
                <div className='flex flex-row md:justify-center mt-[100px] ml-[20%]  md:ml-0 gap-2 md:gap-4'>
                  <a href="https://github.com/BhavjotSingh-12/google-search-app"><AiFillGithub className='md:w-[45px] logos md:h-[45px]' /></a>
                  <a href="https://google-clone-bhavjot.netlify.app/"> <AiOutlineLink className='md:w-[45px] logos md:h-[45px]' /></a>
                </div>
                <div className="content w-[500px] hidden md:block justify-between m-2">
                  Google Search is a Google clone made using ReactJs. A fully responsive
                  and working project includes API integration that enables user to search for
                  web and imagees related to their search.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  md:px-5 md:pt-6 md:my-5 md:py-3">
            <div className="flex card mx-4 pt-2 md:pt-0 md:mx-10">
              <img className="img w-[150px] sm:w-[200px]" src={formax} alt="" />
              <div className='text'>
                <div className='flex flex-row md:justify-center mt-[100px] ml-[20%] md:ml-0 gap-2 md:gap-4'>
                  <a href="https://github.com/BhavjotSingh-12/webd-project"><AiFillGithub className='md:w-[45px] logos md:h-[45px]' /></a>
                  <a href="https://formaxb.netlify.app/"> <AiOutlineLink className='md:w-[45px] logos md:h-[45px]' /></a>
                </div>
                <div className="content w-[500px]  hidden md:block justify-between m-2">
                  Formax is a clone of Formax India. A non responsive site made using
                  HTML aand CSS.
                </div>
              </div>
            </div>
            <div className="flex card mx-4 pt-2 md:pt-0 md:mx-10">
              <img className="img w-[150px] sm:w-[200px]" src={utils} alt="" />
              <div className='text'>
                <div className='flex flex-row md:justify-center mt-[100px] ml-[20%]  md:ml-0 gap-2 md:gap-4'>
                  <a href="https://github.com/BhavjotSingh-12/md:my-app"><AiFillGithub className='md:w-[45px] logos md:h-[45px]' /></a>
                  <a href="https://textutilsb.netlify.app/"> <AiOutlineLink className='md:w-[45px] logos md:h-[45px]' /></a>
                </div>
                <div className="content w-[500px] hidden md:block justify-between m-2">
                  Text-Utils is a ReactJS and Bootstrap website that provides user to
                  manipulate text like clear text, case conversion. Added a feature of
                  mode enabler that allows a user to switch to dark or light theme
                  according to their preference.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects