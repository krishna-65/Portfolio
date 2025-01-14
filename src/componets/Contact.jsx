import { useEffect, useState } from "react";
import Aos from "aos";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const [formData, setFormData] = useState({
    user: '',
    email: '',
    message: '',
  });

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="bg-gradient-to-b from-gray-700 via-black to-gray-700">
      <div className="w-11/12 mx-auto p-10">
        <h2 className="text-3xl md:text-9xl opacity-40 text-white" data-aos="zoom-in">Contact Us</h2>

        <form className="w-[90%] mx-auto flex flex-col items-center my-10" data-aos="flip-right" onSubmit={handleSubmit}>

       
          <div className="flex flex-col gap-2 md:w-[50%]">
            <label htmlFor="user" className="text-white text-2xl">Name</label>
            <input
              type="text"
              name="user"
              placeholder="Enter your name"
              className="px-7 py-2 text-white bg-transparent border-2 border-white rounded-md"
              value={formData.user}
              onChange={handleChange}
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-2 md:w-[50%]">
            <label htmlFor="email" className="text-white text-2xl mt-10">Email</label>
            <input
              type="email"
              name="email" 
              placeholder="Enter your email"
              className="px-7 py-2 bg-transparent border-2 border-white rounded-md"
              value={formData.email}
              onChange={handleChange} 
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col gap-2 md:w-[50%]">
            <label htmlFor="message" className="text-white text-2xl mt-10">Message</label>
            <textarea
              name="message" 
              placeholder="Write your message here"
              className="px-5 py-2 bg-transparent border-2 border-white rounded-md h-[150px]"
              value={formData.message}
              onChange={handleChange} 
            />
          </div>

         
          <button className="px-10 py-3 shadow text-white bg-gradient-to-r from-black to-gray-700 font-semibold font-mono mt-5 rounded-md hover:scale-105 transition-all duration-200" type="submit">
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default Contact;
