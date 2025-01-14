import { useEffect, useState } from "react";
import Aos from "aos";
 const About = () =>{
    useEffect(() => {
        Aos.init({
          duration: 1000,
        });
      }, []);
    return (
        
<section class="bg-gradient-to-b from-[#161515] to-gray-800 py-10" >
  <div class="container mx-auto px-4" data-aos="fade-down">
    
    <div class="mb-8">
      <h2 class="text-3xl font-bold text-gray-600 mb-4">About Me</h2>
      <p class="text-gray-100 leading-relaxed">
        Passionate and results-driven Software Developer with strong experience in building high-performance
        applications using C++ and the MERN stack. Skilled in designing efficient algorithms and creating dynamic, scalable web applications.
      </p>
    </div>

   
    <div>
      <h2 class="text-3xl font-bold text-gray-600 mb-4">Education</h2>
      <div class="relative border-l-4 border-blue-500 ml-4">
      
        <div class="mb-8 ml-6">
          <div class="w-6 h-6 bg-blue-500 rounded-full absolute -left-3"></div>
          <h3 class="text-lg font-bold text-gray-100">Shriram College of Engineering & Management</h3>
          <p class="text-gray-100">B.Tech (Computer Science & Engineering) | June 2021 – June 2025</p>
        </div>
       
        <div class="mb-8 ml-6">
          <div class="w-6 h-6 bg-blue-500 rounded-full absolute -left-3"></div>
          <h3 class="text-lg font-bold text-gray-100">St. Paul Convent H.S. School</h3>
          <p class="text-gray-100">12th Grade (Science) | Completed: 2021 | Percentage: 91.2%</p>
        </div>
      </div>
    </div>
  </div>
</section>

    )
 }
 export default About;