import React from 'react'
import Cpp from '../assets/C++.png'
import HTML from '../assets/HTML.png'
import JS from '../assets/JS.png'
import CSS from '../assets/css.png'
import Bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import java from '../assets/Java.png'
import react from '../assets/React.png'
import github from '../assets/github.png'
import nodejs from '../assets/nodejs.png'
import './image.css'
const Image = () => {
    return (
        <div>
            <div className='text-[50px] ml-[18%]' > My Skills</div>
            <div className='flex justify-center items-center flex-col md:flex-col mt-[25px]'>

                <div className='flex flex-col md:flex-row md:m-3 mb-4 md:my-5'>
                    <div className="flex flex-row mb-4 md:my-0 ">
                        <img src={Cpp} alt="" />
                        <div className='mx-5 '>
                            <div className='flex justify-between'>
                                <span>C++</span>
                                <span className='tooltip'>85%</span>
                            </div>
                            <div className="cpp mt-[5px] my-box">
                                <div className='Cpp'></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row mb-4 md:my-0">
                        <img src={HTML} alt="" />
                        <div className='mx-5 '>
                            <div className='flex justify-between'>
                                <span>HTML</span>
                                <span className='tooltip'>95%</span>
                            </div>
                            <div className=' mt-[5px] my-box'>
                                <div className="html"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row mb-4 md:my-5'>
                    <div className="flex flex-row mb-4 md:my-0">
                        <img src={CSS} alt="" />
                        <div className='mx-5 '>
                            <div className='flex justify-between'>
                                <span>CSS</span>
                                <span className='tooltip'>90%</span>
                            </div>
                            <div className=' mt-[5px] my-box'>
                                <div className="css"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row mb-4 md:my-0">
                        <img src={JS} alt="" />
                        <div className='mx-5 '>
                            <div className='flex justify-between'>
                                <span>JavaScript</span>
                                <span className='tooltip'>75%</span>
                            </div>
                            <div className=' mt-[5px] my-box'>
                                <div className="js"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row mb-4 md:my-5'>
                    <div className="flex flex-row mb-4 md:my-0">
                        <img src={Bootstrap} alt="" />
                        <div className='mx-5 '>
                            <div className='flex justify-between'>
                                <span>Bootstrap</span>
                                <span className='tooltip'>60%</span>
                            </div>
                            <div className=' mt-[5px] my-box'>
                                <div className="bootstrap"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row mb-4 md:my-0">
                        <img src={tailwind} alt="" />
                        <div className='mx-5 '>
                            <div className='flex justify-between'>
                                <span>Tailwind</span>
                                <span className='tooltip'>70%</span>
                            </div>
                            <div className=' mt-[5px] my-box'>
                                <div className="tailwind"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row mb-4 md:my-5'>
                    <div className="flex flex-row mb-4 md:my-0">
                        <img src={react} alt="" />
                        <div className='mx-5 '>
                            <div className='flex justify-between'>
                                <span>ReactJS</span>
                                <span className='tooltip'>75%</span>
                            </div>
                            <div className=' mt-[5px] my-box'>
                                <div className="react"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row mb-4 md:my-0">
                        <img src={java} alt="" />
                        <div className='mx-5 '>
                            <div className='flex justify-between'>
                                <span>Java</span>
                                <span className='tooltip'>70%</span>
                            </div>
                            <div className=' mt-[5px] my-box'>
                                <div className="java"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row mb-4 md:my-5'>
                    <div className="flex flex-row mb-4 md:my-0">
                        <img src={github} alt="" />
                        <div className='mx-5 '>
                            <div className='flex justify-between'>
                                <span>Github</span>
                                <span className='tooltip'>70%</span>
                            </div>
                            <div className=' mt-[5px] my-box'>
                                <div className="github"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row mb-4 md:my-0">
                        <img src={nodejs} alt="" />
                        <div className='mx-5  '>
                            <div className='flex justify-between'>
                                <span>NodeJS</span>
                                <span className='tooltip'>50%</span>
                            </div>
                            <div className=' mt-[5px] my-box'>
                                <div className="node"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Image