import HTML_image from "../assets/icons/HTML.png";
import CSS_image from "../assets/icons/CSS.png";
import Javascript_image from "../assets/icons/Javascript.svg";
import React_image from "../assets/icons/react.svg";
import Redux_image from "../assets/icons/Redux.svg";
import Tailwind_image from "../assets/icons/Tailwind.png";
import Nodejs_image from "../assets/icons/Nodejs.png";
import Expressjs_image from "../assets/icons/expressjs.png";
import MongoDB_image from "../assets/icons/MongoDB.png";
import C_image from "../assets/icons/C++.png";
import { motion } from "framer-motion";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const data = [
    { id: 1, image: HTML_image, title: "HTML" },
    { id: 2, image: CSS_image, title: "CSS" },
    { id: 3, image: Tailwind_image, title: "Tailwind CSS" },
    { id: 4, image: Javascript_image, title: "Javascript" },
    { id: 5, image: React_image, title: "React" },
    { id: 6, image: Redux_image, title: "Redux" },
    { id: 7, image: Nodejs_image, title: "NodeJS" },
    { id: 8, image: Expressjs_image, title: "ExpressJS" },
    { id: 9, image: MongoDB_image, title: "MongoDB" },
    { id: 10, image: C_image, title: "C++" },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-700 via-black to-gray-700 min-h-screen">
      <div className="w-11/12 mx-auto p-10">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-9xl text-white opacity-40"
          data-aos="flip-up"
        >
          Skills
        </motion.h2>

        <div
          className="w-full md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 gap-10"
          data-aos="fade-up"
        >
          {data.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col rounded-md justify-center items-center p-6 transition-all duration-200 shadow-lg bg-gradient-to-r from-black to-gray-800 gap-4 hover:shadow-gray-500/50"  data-aos="fade-up"
            >
              <div className="relative">
                <img
                  className="w-14 h-14 rounded-full border-2 border-gray-300 shadow-lg hover:shadow-gray-500/50"
                  src={item.image}
                  alt={item.title}
                />
                <span
                  className="absolute inset-0 rounded-full bg-gray-700 opacity-0 hover:opacity-10 transition-opacity duration-300"
                ></span>
              </div>
              <p className="text-xl text-white font-semibold">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
