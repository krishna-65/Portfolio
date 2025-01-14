import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Project from './Project';
import project1 from '../assets/project_images/project1.png';
import project2 from '../assets/project_images/project2.png'
import project3 from '../assets/project_images/project3.png'
import project4 from '../assets/project_images/project4.png'
import project5 from '../assets/project_images/project5.png'
import project6 from '../assets/project_images/project6.png'
import project7 from '../assets/project_images/project7.png'
const Projects = () => {

    const data = [
        {
            id:6,
            title:"EduElevate",
            expertise:"Full-Stack Project",
            description: "It's  a platform for students and educators using the MERN stack.",
            image: project6,
            github_link: "https://github.com/krishna-65/EduElevate.git",
            website_link: "https://eduelevate-1.onrender.com/"
      
        },
        {
            id:1,
            title:"Movie Ticket Booking Website",
            expertise:"Full-Stack Project",
            description: "It's a full-stack project in which for admin and for user have a separate dashboard after login. You can checkitout on links. It is live available",

            image: project5,
            github_link: "https://github.com/krishna-65/Movie-Ticket-Booking",
            website_link: "https://movie-ticket-booking-3tgt.onrender.com/"
        },
        {
            id:7,
            title:"Collaborative Code Editor",
            expertise:"Full-Stack Project",
            description: "It's a real-time collaborative code editor with WebSockets for simultaneous editing by multiple users.",
            image: project7,
            github_link: "https://github.com/krishna-65/Collaborative-Editor.git",
            website_link: "https://collaborative-editor-qips.onrender.com/"
        },
        {id:2,
            title: 'TOTC-Edtech Platform ',
            expertise:"Frontend Project",
            description: "It's a Frontend of Ed-Tech Platform with user-experience",
            image: project1,
            github_link: "https://github.com/krishna-65/TOTC-Online-Learnig-Platform.git",
            website_link: "https://krishnatotcedtechplatform.netlify.app/"
        },
        {id:3,
            title: 'Razorpay UI CLone',
            expertise:"UI Project",
            description: "It's a UI of Razorpay website with user-experience",
            image: project2,
            github_link: "https://github.com/krishna-65/Razorpay-UI.git",
            website_link: "https://krishnarazorpayuiclone.netlify.app/"
        },
        {id:4,
            title: 'whether Website',
            expertise:"Frontend Project",
            description: "It's  a wheather project and fetching data from API",
            image: project3,
            github_link: "https://github.com/krishna-65/Weather.git",
            website_link: "https://krishnaweatheapp.netlify.app/"
        },
        {
            id:5,
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
