import { HiMiniArrowSmallRight } from "react-icons/hi2";
import HTML_image from "../assets/icons/HTML.png"
import CSS_image from "../assets/icons/CSS.png"
import React_image from "../assets/icons/react.svg"
import Redux_image from "../assets/icons/Redux.svg"
import Aos from 'aos';
import { useEffect } from 'react';
import { FaGithubSquare } from 'react-icons/fa';

const Project = (project)=>{

    project = project.project;
  

    useEffect(()=>{
        Aos.init({ duration: 1000 });
    },[])

    return (
        <div  className='rounded-md relative  '>
             <img src={`${project.image}`} className='rounded-md shadow opacity-40 mt-5 mb-14' alt="" />
             <div className='md:absolute  bottom-16 left-12'  data-aos='flip-up'>
                <div className=' flex gap-2 pb-1' >
                    <img src={HTML_image} className='md:w-10 md:h-10 w-6 h-6' alt="" />
                    <img src={CSS_image} className='md:w-10 md:h-10 w-6 h-6'  alt="" />
                    <img src={React_image}  className='md:w-10 md:h-10 w-6 h-6' alt="" />
                    <img src={Redux_image} className='md:w-10 md:h-10 w-6 h-6' alt="" />
                </div>
                 <h3 className='text-xl md:text-3xl text-white pb-1 font-semibold'>{project.title}</h3>
                 <p className='text-sm md:text-md font-mono text-white'>{project.expertise}</p>
                 <p className=' font-mono text-sm md:text-md text-white pb-4'>{project.description}</p>

                 <div className='flex flex-col sm:flex-row gap-7'>
                    <a href={project.website_link} className=" w-[90%] text-center sm:w-[200px] text-white bg-gradient-to-r from-black to-gray-700 px-12 py-2 hover:scale-125 transition-all duration-200 rounded-md">Explore <HiMiniArrowSmallRight className="inline-block text-white text-xl"/></a>

                    <div className="flex gap-2" data-aos="flip-right">
                           <a href={project.github_link}>  <FaGithubSquare className="text-white text-4xl cursor-pointer hover:scale-125 duration-200 transition-all " /></a>
                     
                    </div>
                 </div>

             </div>

        </div>
    )
}
export default Project;