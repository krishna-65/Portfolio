import Aos from "aos";
import { useEffect } from "react";
import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = ()=>{
    useEffect(()=>{
        Aos.init({duration: 1000}); // initialise AOS with duration 1 second
     }, []);
   
 return(
    <div  className="bg-gradient-to-b from-gray-700 to-black">
    <div className="w-11/12 mx-auto  h-[30vh] " data-aos="flip-up">

        <h2 className="text-5xl md:text-9xl relative -bottom-18 text-white opacity-40">Krishna</h2>
        <div className="h-16 flex flex-col gap-5 justify-center items-center text-[12px] md:text-sm font-semibold">
            <p className="text-white">Copyright &copy; 2023 Krishna Kant. All rights reserved.</p>
           
                  <div className="flex gap-4 justify-center" data-aos="flip-right">
                            <a href="https://github.com/krishna-65/">
                              <FaGithubSquare className="text-4xl cursor-pointer hover:scale-110 hover:text-gray-500 duration-300 transition-all text-white" />
                            </a>
                            <a href="https://www.linkedin.com/feed/">
                              <FaLinkedin className="text-4xl cursor-pointer hover:scale-110 hover:text-blue-600 duration-300 transition-all text-white" />
                            </a>
                            <a href="https://instagram.com/">
                              <FaInstagram className="text-4xl cursor-pointer hover:scale-110 hover:text-pink-500 duration-300 transition-all text-white" />
                            </a>
                          </div>
           
        </div>

    </div>
</div>
 )
}
export default Footer;