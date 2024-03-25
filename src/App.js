import { easeInOut, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Quote from "./components/Quote";
import projects from "./res/projects";

function App() {
  const cursorRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    if (cursorRef.current) {
      cursorRef.current.style.left = `${clientX}px`;
      cursorRef.current.style.top = `${clientY}px`;
    }
  };

  useEffect(() => {
    if (!cursorRef.current) {
      cursorRef.current.style.display = "none";
    }
  }, []);

  return (
    <div className="bg-white w-full" onMouseMove={handleMouseMove}>
      <motion.div 
      initial={{y:-100}}
      animate={{y:0}}
      transition={{duration:0.7,delay:1,ease:easeInOut}}
      className="z-50 fixed top-16 left-1/2 w-auto h-auto flex justify-center items-center">
        <Navbar />
      </motion.div>
      <div
        ref={cursorRef}
        className="fixed top-0 bg-orange-400 left-0 pointer-events-none z-50 rounded-full h-4 w-4 ease-in-out"
      />
      <Home />
      <div className="">
        <section className="h-[20px] w-[20px] rounded-full mt-20 ml-[31px] bg-gray-400 absolute"></section>
        <motion.section
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="h-[1664px] w-[2px] ml-10 mt-24 bg-gray-400 absolute"
        ></motion.section>
      </div>

      <div id="projects" className="flex flex-col justify-center items-center">
        <h1 style={{letterSpacing:"10px"}} className="ml-[500px] text-8xl font-bold mt-8 mb-[-40px]">PROJECTS</h1>
        {projects.map((project) => {
          return (
            <div className="mb-[-100px] z-30">
              <ProjectCard
                key={project.id}
                name={project.title}
                details={project.details}
                img={project.img}
                skills={project.skills}
                github={project.github}
              />
            </div>
          );
        })}
      </div>
      <About />
      <Education />
      <Quote />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
