import Navbar from "../componets/Navbar";
import Hero from "../componets/Hero";
import Projects from "../componets/Projects";
import Skills from "../componets/Skills";
import Contact from "../componets/Contact";
import Footer from "../componets/Footer";

const Home = () =>{
    return(
        <div className="w-full h-screen">
             <Navbar/>
           <section id="#home">  <Hero/></section>
           <section id="projects"> <Projects /></section>
           <section id="skills"> <Skills/></section>
           <section id="contactus"> <Contact/></section>
           <section id="about"> <Footer/></section>
           
             {/* <di className="item bg-blue-500 text-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
  <h1>Styled with Tailwind CSS</h1>
</div> */}

        </div>
    )
}
export default Home;