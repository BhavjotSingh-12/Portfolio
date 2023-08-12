import React from 'react'
import './Resume.css'
import resume from '../assets/ResumeB.pdf';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Navbar from './Navbar';
import { FaGraduationCap } from "react-icons/fa";
import { RiFileDownloadFill } from "react-icons/ri";
import { BiSolidDownload } from "react-icons/bi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Resume = () => {
  return (
    <div className='resumecs w-full text-[white] py-3 pb-5'>
      <Navbar />
      <div className='mx-[10%] my-[3%] fontstyle '>
        <div className='bg-black opacity-90 rounded-[10px] p-5'>
          <div className='ml-[8%] '>Resume</div>
          <div className="font-medium text-[35px] text-[white] m-3 ml-[8%]">Check My resume</div>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#c4c4c451', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  white' }}
              date="My Resume"
              iconStyle={{ background: '#49def8', color: 'white' }}
              icon={<BiSolidDownload />}
              id='one'
            >
              <div className='md:ml-[18%]'>
                <a
                  href={resume}
                  download="Resume-download"
                  target="_self"
                  rel="noreferrer"
                >
                  <button className='md:w-[300px] md:h-[50px] mt-2 flex align-center justify-center md:text-[25px] bg-[#fff] text-black
            rounded' id='hover'>

                    <div className='mt-2 mr-2'>
                      {<RiFileDownloadFill />}
                    </div>
                    Download My Resume
                  </button>
                </a>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#c4c4c451', color: '#fff' }}
              date="2017 - 2018"
              iconStyle={{ background: '#49def8', color: '#fff' }}
              icon={<FaGraduationCap />}
            >
              <h1 className="vertical-timeline-element-title font-medium text-white">SECONDARY EDUCATION (10TH), CBSE</h1>
              <h4 className="vertical-timeline-element-subtitle font-normal text-white">DAV Centenary Public School, Haridwar</h4>
              <p className='text-white'>
                I have completed my 10th from CBSE board with overall 87.2%.
              </p>

            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#c4c4c451', color: '#fff' }}
              date="2019 - 2020"
              iconStyle={{ background: '#49def8', color: '#fff' }}
              icon={<FaGraduationCap />}
            >
              <h1 className="vertical-timeline-element-title font-medium text-[white]">SENIOR EDUCATION (12TH), CBSE</h1>
              <h4 className="vertical-timeline-element-subtitle font-normal text-[white]">DAV Centenary Public School, Haridwar</h4>
              <p className='text-white'>
                I have completed my 10th from CBSE board with overall 91%.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#c4c4c451', color: '#fff' }}
              date="2021 - 2025 "
              iconStyle={{ background: '#49def8', color: '#fff' }}
              icon={<FaGraduationCap />}
            >
              <h1 className="vertical-timeline-element-title font-medium text-[white]">BACHELOR OF TECHNOLOGY, COMPUTER SCIENCE</h1>
              <h4 className="vertical-timeline-element-subtitle font-normal text-[white]">Maharaja Agrasen Institute of Technology ,New Delhi</h4>
              <p className='text-white'>
                I Am currently in my 3rd year of Graduation degree .
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#c4c4c451', color: '#fff' }}
              date="Summary"
              iconStyle={{ background: '#49def8', color: '#fff' }}
              icon={<BsFillPersonLinesFill />}
            >
              <h1 className="vertical-timeline-element-title font-medium text-[white]">Summary</h1>
              <h4 className="vertical-timeline-element-subtitle text-[white]">An individual who possesses both technical expertise
                and a strong artistic flair, decent programming skills with a keen eye for design.</h4>
              <div className='mt-5'>
                <h4 className="vertical-timeline-element-subtitle text-[white] ">Tries to keeps up with the latest trends and tools in the industry, continuously seek
                  to improve skills, explore new techniques, and stay updated on design and
                  development best practices. </h4>
              </div>

            </VerticalTimelineElement>

          </VerticalTimeline>
        </div>

      </div>
    </div>
  )
}

export default Resume