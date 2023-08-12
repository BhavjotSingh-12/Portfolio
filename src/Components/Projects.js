import React from 'react'
import './Projects.css'
import netflix from '../assets/netflix.jpg'
import formax from '../assets/Formax.jpg'
import launch from '../assets/Launch.jpg'
import google from '../assets/google.jpg'
import utube from '../assets/youtube.jpg'
import utils from '../assets/utils.jpg'
import Navbar from './Navbar'
import github from '../assets/github.png'
import logo from '../assets/link.png'
const Projects = () => {
  return (
    <div className='projectcs w-full py-3'>
      <Navbar />
      <div className='mx-[10%] md:my-[3%] py-3'>
        <div className="bg-black pb-5 opacity-90 rounded-[10px] ">
          <div className='text-white text-[40px] px-6 py-4 md:mx-5'>My Projects</div>
         
          <div className="flex flex-col md:flex-row sm:md:my-3 px-5 pt-6 md:md:my-5 py-3">
            <div className="flex card justify-between mx-10">
              <img className="img sm:w-[200px]" src={netflix} alt="" />
              <div className='text '>
                <div className='flex flex-row justify-center mt-[100px] gap-4'>
                  <a href="https://github.com/BhavjotSingh-12/Netflix-Clone"><img src={github} className='logo' alt="" /></a>
                  <a href="https://bmd:my-flix.netlify.app/"> <img src={logo} className='logo' alt="" /></a>
                </div>
                <div className="content w-[500px] justify-center m-1 hidden md:block">
                  My-Flix is a fully responsive project built using only HTML and CSS.
                  The project aims to create a clone of a specific website and replicating
                  its design and layout.
                </div>
              </div>
            </div>
            <div className="flex card  mx-10">
              <img className="img" src={utube} alt="" />
              <div className='text'>
              <div className='flex flex-row justify-center mt-[100px] gap-4'>
                  <a href="https://github.com/BhavjotSingh-12/youtubeclone"><img src={github} className='logo' alt="" /></a>
                  <a href="https://utubebhav.netlify.app/"> <img src={logo} className='logo' alt="" /></a>
                </div>
                <div className="content w-[500px]  justify-between m-2 hidden md:block">
                  U-Tube is a fully responsive and functional frontend project, a clone of Youtube
                  made using react. Includes API integration and allows user to serach and play
                  videos.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row sm:my-3 px-5 pt-6 md:my-5 py-3">
            <div className="flex card mx-10">
              <img className="img " src={launch} alt="" />
              <div className='text'>
              <div className='flex flex-row justify-center mt-[100px] gap-4'>
                  <a href="https://github.com/BhavjotSingh-12/launch"><img src={github} className='logo' alt="" /></a>
                  <a href="https://launchpay.netlify.app/"> <img src={logo} className='logo' alt="" /></a>
                </div>
                <div className="content w-[500px] justify-between hidden md:block m-2">
                  Launch is a payment gateway landing page. Not responsive made with
                  the help of HTML and CSS. Basic moto of this project is to learn about animations.
                </div>
              </div>
            </div>
            <div className="flex card mx-10">
              <img className="img " src={google} alt="" />
              <div className='text'>
              <div className='flex flex-row justify-center mt-[100px] gap-4'>
                  <a href="https://github.com/BhavjotSingh-12/google-search-app"><img src={github} className='logo' alt="" /></a>
                  <a href="https://google-clone-bhavjot.netlify.app/"> <img src={logo} className='logo' alt="" /></a>
                </div>
                <div className="content w-[500px] hidden md:block justify-between m-2">
                  Google Search is a Google clone made using ReactJs. A fully responsive
                  and working project includes API integration that enables user to search for
                  web and imagees related to their search.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row px-5  sm:md:my-3 pt-6 md:my-5 py-3">
            <div className="flex card mx-10">
              <img className="img " src={formax} alt="" />
              <div className='text'>
              <div className='flex flex-row justify-center mt-[100px] gap-4'>
                  <a href="https://github.com/BhavjotSingh-12/webd-project"><img src={github} className='logo' alt="" /></a>
                  <a href="https://formaxb.netlify.app/"> <img src={logo} className='logo' alt="" /></a>
                </div>
                <div className="content w-[500px]  hidden md:block justify-between m-2">
                  Formax is a clone of Formax India. A non responsive site made using
                  HTML aand CSS.
                </div>
              </div>
            </div>
            <div className="flex card mx-10">
              <img className="img " src={utils} alt="" />
              <div className='text'>
              <div className='flex flex-row justify-center mt-[100px] gap-4'>
                  <a href="https://github.com/BhavjotSingh-12/md:my-app"><img src={github} className='logo' alt="" /></a>
                  <a href="https://textutilsb.netlify.app/"> <img src={logo} className='logo' alt="" /></a>
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