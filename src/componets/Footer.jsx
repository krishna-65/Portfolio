import Aos from "aos";
import { useEffect } from "react";
const Footer = ()=>{
    useEffect(()=>{
        Aos.init({duration: 1000}); // initialise AOS with duration 1 second
     }, []);
   
 return(
    <div  className="bg-gradient-to-b from-gray-700 to-black">
    <div className="w-11/12 mx-auto  h-[30vh] " data-aos="flip-up">

        <h2 className="text-5xl md:text-9xl relative -bottom-18 text-white opacity-40">Krishna</h2>
        <div className="h-16 flex justify-center items-center text-[12px] md:text-sm font-semibold">
            <p className="text-white">Copyright &copy; 2023 Krishna Kant. All rights reserved.</p>
        </div>

    </div>
</div>
 )
}
export default Footer;