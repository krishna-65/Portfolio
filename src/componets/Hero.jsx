import { useEffect } from "react";
import krishna from "../assets/krishna2.jpg"
import Aos from "aos";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Hero = ()=>{

    useEffect(()=>{
        Aos.init({duration:1000});
    },[])

  

    return (
        <div  className="bg-gradient-to-b from-black via-black  to-gray-800 h-[90%] items-center p-10 flex flex-col-reverse md:flex-row justify-around">
            <div className="text-white flex flex-col font-mono mt-10">
                <p className="text-lg md:text-2xl " data-aos="flip-right">Hello It's Me</p>
                <h2 className="text-3xl md:text-5xl font-semibold py-1" data-aos="flip-right">Krishna kant</h2>
                <p className="text-xl md:text-3xl" data-aos="flip-right">And I'm a <span  data-aos-easing="ease-in-sine" className=" bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-2xl md:text-5xl font-black aos-init aos-animate">Full-Stack Developer</span></p>
                <p></p>

                <div className="pt-16 flex flex-col md:flex-row items-center gap-7 " data-aos="flip-right">
                    <a href="/Resume.pdf" 
                          download="Krishna_Resume.pdf" className="hover:scale-125 duration-200 transition-all  bg-gradient-to-r from-black to-gray-700 shadow rounded-md text-xl px-10 py-2 font-semibold">Download CV <MdOutlineFileDownload className="inline-block text-2xl"/></a>
                    
                    <div className="flex gap-2" data-aos="flip-right">
                            <a href="https://github.com/krishna-65/"> <FaGithubSquare className="text-4xl cursor-pointer hover:scale-125 duration-200 transition-all" /> </a>
                            <a href="https://www.linkedin.com/feed/"> <FaLinkedin className="text-4xl cursor-pointer hover:scale-125 duration-200 transition-all"/> </a>
                         
        
                            <a  href="https://instagram.com/"> <FaInstagram className="text-4xl cursor-pointer hover:scale-125 duration-200 transition-all"/> </a>
                    </div>

                </div>


            </div>
            <div className=" w-[90%]   sm:w-[500px]  md:flex justify-center items-center sm:h-[500px] overflow-hidden rounded-full ">
                        <img data-aos="flip-up" src={krishna} className="object-top rounded-full" alt="" />
            </div>
        </div>
    )
}
export default Hero;