import HTML_image from "../assets/icons/HTML.png";
import CSS_image from "../assets/icons/CSS.png";
import Javascript_image from "../assets/icons/Javascript.svg";
import React_image from "../assets/icons/react.svg";
import Redux_image from "../assets/icons/Redux.svg";
import Tailwind_image from "../assets/icons/Tailwind.png";
import Nodejs_image from "../assets/icons/Nodejs.png"
import Expressjs_image from "../assets/icons/expressjs.png"
import MongoDB_image from "../assets/icons/MongoDB.png"
import C_image from "../assets/icons/C++.png"
import Aos from "aos";
import { useEffect } from "react";
const Skills = () => {

    useEffect(()=>{
        Aos.init({
            duration: 1000,
        });
    },[])

    const data = [
        {
            id:1,
            image:HTML_image,
            title: 'HTML',
            
        },
        {
            id:2,
            image:CSS_image,
            title: 'CSS'
        },
        {
            id:3,
            image:Tailwind_image,
            title: 'Tailwind CSS'
        },
        {
            id:4,
            image:Javascript_image,
            title: 'Javascript'
        },
        {
            id:5,
            image:React_image,
            title: 'React'
        },
        {
            id:6,
            image:Redux_image,
            title: 'Redux'
        },
        {
            id:7,
            image:Nodejs_image,
            title: 'NodeJS'
        },
        {
            id:8,
            image:Expressjs_image,
            title: 'ExpressJS'
        },
        {
            id:9,
            image:MongoDB_image,
            title: 'MongoDB'
        },
        {
            id:10,
            image:C_image,
            title:"C++"
        }
        
    ]
  
    return (
        <div  className="bg-gradient-to-b from-gray-700 via-black to-gray-700">
                <div className="w-11/12 mx-auto p-10">
                   <h2 className="text-4xl md:text-9xl opacity-40  text-white " data-aos="flip-up">Skills</h2>

                    <div className="w-[100%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 gap-10" >

                        {
                            data.map(item => (
                                <div key={item.id} data-aos="flip-down" className="flex flex-col rounded-md justify-center items-center py-10 hover:scale-90 transition-all duration-400 shadow bg-gradient-to-r form-black to-gray-700 gap-2">
                                    <img className="w-10 h-10 rounded-full" src={item.image} alt={item.title}/>
                                    <p className="text-lg text-white">{item.title}</p>
                                </div>
                            ))
                        }
                    </div>
            
                </div>
        </div>
    )
}
export default Skills;