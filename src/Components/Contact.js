import React from 'react'
import './Contact.css'
import Navbar from './Navbar'
import location from '../assets/location.png'
import mail from '../assets/mail.png'
import share from '../assets/share.png'
import github2 from '../assets/github2.png'
import linkedin from '../assets/linkedin.png'
const Contact = () => {
  return (
    <div className=' contactcs w-full py-3'>
      <Navbar />
      <div className='opacity-90 bg-black my-[3%] mx-[13%] rounded-[10px] py-3 text-[white] fontsty'>
        <div className="m-3 text-[40px]">Contact Me</div>
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='md:w-[500px] flex flex-row mx-5 md:mx-8 bg-[#c4c4c451] md:m-3 md:text-[25px] md:p-3 rounded-[8px] h-[110px]'>
            <img src={location} className='w-[45px] h-[45px] mr-3 mt-5' alt="" />
            My Address<br />
            Haridwar, India</div>
          <div className='md:w-[500px] flex flex-col mx-5 md:mx-0 bg-[#c4c4c451] md:m-3 md:text-[25px] md:p-3 h-[110px] rounded-[8px]'>
            <div className=' flex flex-row '>
              <img src={share} className='w-[45px] h-[45px] mr-3 ' alt="" />
              Social Profiles
            </div>
            <div className="flex flex-row  ml-[55px] gap-4">
              <a href="https://github.com/BhavjotSingh-12"><img src={github2} className='w-[25px] h-[25px] my-3' alt="" /></a>
              <a href="https://www.linkedin.com/in/bhavjot-singh-166b05228"><img src={linkedin} className='w-[25px] h-[25px] my-3' alt="" /></a>
              <a href="mailto:bhavjot861@gmail.com"><img src={mail} className='w-[25px] h-[25px]  my-3' alt="" /></a>
            </div>
          </div>
        </div>
        <div className='md:w-[500px] bg-[#c4c4c451] mx-5 md:mx-[25%] mt-5 md:mt-0 flex flex-row md:m-3 md:text-[25px] md:p-3 h-[100px] rounded-[8px]'>
          <img src={mail} className='w-[45px] h-[45px] mt-5 mr-3' alt="" />
          Email Me
          <br />bhavjot861@gmail.com
        </div>
      </div>
      <div className="opacity-70 bg-black my-[3%] mx-[13%] rounded-[10px] py-3 text-[white]">
        <div className='text-center text-[40px]'>Write me an Email!</div>
        <form action="https://getform.io/f/22fbf253-57a9-4862-ae33-80f01cd0f7c0" method="POST">
          <input type="text" name="Name" placeholder='Name' className='mx-[30px] rounded-[8px] m-2 p-2 bg-[#c4c4c451] w-[50vw] md:w-[65vw] text-[black]' />
          <input type="email" name="email" placeholder='Email' className='mx-[30px] rounded-[8px] m-2 p-2 bg-[#c4c4c451] w-[50vw]  md:w-[65vw] text-[black]' />
          <input type="text" name="subject" placeholder='Subject' className='mx-[30px] rounded-[8px] m-2 p-2 bg-[#c4c4c451] w-[50vw]  md:w-[65vw] text-[black]' />
          <textarea name="message"
            rows="10"
            placeholder="Message" className='mx-[30px] m-2 p-2 bg-[#c4c4c451] rounded-[8px] w-[50vw] md:w-[65vw] text-[black]' />
          <button className='btn mx-[45%] w-[110px] h-[40px] rounded-[8px] bg-[#49def8]'>Send Email</button>
        </form>
      </div>
    </div>
  )
}

export default Contact