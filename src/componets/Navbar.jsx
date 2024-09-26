import { useState } from "react";
import { useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import { Link } from "react-scroll";


const Navbar =()=>{
    const [isVisible, setIsVisible] = useState(false); // Track if the navbar is visible

    useEffect(() => {
      // Set a delay of 2 seconds (2000ms) before showing the navbar
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
  
      // Cleanup the timer when the component is unmounted
      return () => clearTimeout(timer);
    }, []);

    const links = [
        {
            id:"#home",
            link:"home"
            
        },
        {
            id:"#about",
            link:"about"
        },
        {
            id:'#projects',
            link:"services"
        },
        {
            id:"#contactus",
            link:"contact"
        },
        {
            id:"#skills",
            link:"skills"
        }
    ]

    const [hamburger, sethamburger] = useState(false);
    const handleHamburgerHover = ()=>{
                sethamburger(!hamburger);
    }

    return (
        <div className=" bg-gradient-to-b from-gray-800 to-black ">


           <div className= {`${isVisible?"opacity-100":" opacity-0"} delay-200 transition-opacity duration-1000 easy-in flex justify-between items-center px-7 py-4  text-white font-mono`}>


                  <h1 className="text-4xl">K<span className="text-xl md:text-2xl relative -top-1">rishna kant</span></h1>

                        <div className="hidden md:flex justify-evenly w-[50%]">
                        {
                            links.map((element, key)=>{
                                return(
                                    <a    className={`capitalize
                                        transition-transform duration-500 ease-in-out  hover:cursor-pointer
                                        ${isVisible ? 'translate-y-0 opacity-100 delay-100' : '-translate-y-16 opacity-0'}
                                        `} key={key} href = {element.id}>{element.link}</a>
                                )
                            })
                        }
                        </div>

                    <RxHamburgerMenu className="md:hidden hover:cursor-pointer" onClick={handleHamburgerHover}/>
            
           </div>
          
           <div  className={`${hamburger?"flex flex-col ":"hidden"} w-[50%] mx-auto mt-16`}>
                    {
                            links.map((element, id)=>{
                                return(
                                    <Link    className={`capitalize
                                        transition-transform duration-500 ease-in-out 
                                        text-white text-center pb-2 hover:cursor-pointer
                                        ${isVisible ? 'translate-y-0 opacity-100 delay-100' : '-translate-y-16 opacity-0'}
                                        `} key={id} to ={element.link}>{element.link}</Link>
                                )
                            })
                        }
                    </div>

     
        </div>
    )

}
export default Navbar;