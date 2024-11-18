import { useEffect } from "react";
import krishna from "../assets/krishna.jpg";
import Aos from "aos";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithubSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-b from-black via-black to-gray-800 h-screen flex flex-col-reverse md:flex-row justify-around items-center p-10">
      {/* Text Section */}
      <div className="text-white flex flex-col items-center md:items-start font-mono mt-10">
        <p className="text-lg md:text-2xl" data-aos="flip-right">
          Hello, It's Me
        </p>
        <h2
          className="text-3xl md:text-5xl font-semibold py-1"
          data-aos="flip-right"
        >
          Krishna Kant
        </h2>
        <p
          className="text-xl md:text-3xl"
          data-aos="flip-right"
        >
          And I'm a{" "}
          <span
            className="bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-2xl md:text-5xl font-black"
          >
            <Typewriter
              words={["Backend Developer", "Frontend Developer", "Web Developer"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1000}
            />
          </span>
        </p>

        {/* Buttons and Socials */}
        <div
          className="pt-16 flex flex-col md:flex-row items-center gap-7"
          data-aos="flip-right"
        >
          <a
            href="/Resume.pdf"
            download="Krishna_Resume.pdf"
            className="hover:scale-110 duration-300 transition-all bg-gradient-to-r from-black to-gray-700 shadow rounded-md text-xl px-10 py-2 font-semibold hover:shadow-lg"
          >
            Download CV{" "}
            <MdOutlineFileDownload className="inline-block text-2xl" />
          </a>

          <div className="flex gap-4" data-aos="flip-right">
            <a href="https://github.com/krishna-65/">
              <FaGithubSquare className="text-4xl cursor-pointer hover:scale-110 hover:text-teal-500 duration-300 transition-all" />
            </a>
            <a href="https://www.linkedin.com/feed/">
              <FaLinkedin className="text-4xl cursor-pointer hover:scale-110 hover:text-blue-600 duration-300 transition-all" />
            </a>
            <a href="https://instagram.com/">
              <FaInstagram className="text-4xl cursor-pointer hover:scale-110 hover:text-pink-500 duration-300 transition-all" />
            </a>
          </div>
        </div>
      </div>

      {/* Circular Image Section */}
      <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px] flex justify-center items-center overflow-hidden rounded-full border-4 border-gray-700 shadow-lg">
        <img
          data-aos="flip-up"
          src={krishna}
          className="w-full h-full object-cover transition-all duration-500 transform hover:scale-105"
          alt="Krishna Kant"
        />
      </div>
    </div>
  );
};

export default Hero;
