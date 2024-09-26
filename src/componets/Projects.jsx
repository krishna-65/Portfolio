import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Project from './Project';
import project1 from '../assets/project_images/project1.png';
import project2 from '../assets/project_images/project2.png'
import project3 from '../assets/project_images/project3.png'
import project4 from '../assets/project_images/project4.png'
const Projects = () => {

    const data = [
        {id:1,
            title: 'TOTC-Edtech Platform ',
            expertise:"Frontend Project",
            description: "It's a Frontend of Ed-Tech Platform with user-experience",
            image: project1,
            github_link: "https://github.com/krishna-65/TOTC-Online-Learnig-Platform.git",
            website_link: "https://krishnatotcedtechplatform.netlify.app/"
        },
        {id:2,
            title: 'Razorpay UI CLone',
            expertise:"UI Project",
            description: "It's a UI of Razorpay website with user-experience",
            image: project2,
            github_link: "https://github.com/krishna-65/Razorpay-UI.git",
            website_link: "https://krishnarazorpayuiclone.netlify.app/"
        },
        {id:3,
            title: 'whether Website',
            expertise:"Frontend Project",
            description: "It's  a wheather project and fetching data from API",
            image: project3,
            github_link: "https://github.com/krishna-65/Weather.git",
            website_link: "https://krishnaweatheapp.netlify.app/"
        },
        {
            id:4,
            title:"Fashion Website UI",
            expertise:"UI Project",
            description: "It's a simple UI for a fashion website with responsiveness",

            image: project4,
            github_link: "https://github.com/krishna-65/Fashion-Website-UI.git",
            website_link: "https://krishnafashionwebsiteui.netlify.app/"
        }
    ]

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with optional settings
  }, []);

  return (
    <div className='bg-gradient-to-b from-gray-700 via-black to-gray-800'>

       <div className='w-11/12 mx-auto p-10' data-aos="">
             <h2 className='text-4xl md:text-9xl text-white opacity-30 my-5' >Projects</h2>
             <div className='flex flex-col space-y-10'>
                 {data.map((project) => (
                     <Project key={project.id} project={project} />
                 ))}
                </div>  
       </div>
          
    </div>

  )
};

export default Projects;
