import { easeIn, motion } from "framer-motion";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Home = () => {
    const name = "SANGMESH";
    const det="Front-End Developer | UI/UX designer"
    const charVariants = {
        initial: { opacity: 0, x: -20,letterSpacing: "78px"},
        animate: { opacity: 1, x: 0 ,letterSpacing: "6px"},
        transition: {duration: 2}
      };
      const charVariants1 = {
        initial: { opacity: 0, letterSpacing: "8px"},
        animate: { opacity: 1, letterSpacing: "6px"},
        transition: {duration: 0.2}
      };
  return (
    <div
    id="homepage"
      style={{
        background:
          "linear-gradient(to bottom left, rgba(1, 8, 18, 1), rgba(22, 22, 22, 1))",
      }}
      className="h-[100vh] w-full text-white flex flex-row"
    >
      <div className="h-full w-auto flex flex-col z-10">
        <div className="">
          <section className="h-[20px] w-[20px] rounded-full mt-20 ml-[31px] bg-white absolute"></section>
          <motion.section initial={{ scale: 0 }}
        animate={{ scale: 1 }} transition={{duration: 1}} className="h-[40vh] w-[2px] ml-10 mt-24 bg-white"></motion.section>
        </div>
        <motion.span
        initial={{marginTop: -100}}
        animate={{marginTop: 170}}
        transition={{duration:1}}
          style={{ letterSpacing: "9px" }}
          className="rotate-90 mt-40 font-semibold ml-[-60px]"
        >
          SCROLL DOWN
        </motion.span>
      </div>
      {/* orange circle */}
      <div
        style={{
          background:
            "linear-gradient(to top,rgba(188, 101, 0, 1),rgba(255, 177, 85, 1))",
          marginLeft: "-50px",
        }}
        className="h-[60vh] w-[30vw] rounded-full absolute top-44"
      ></div>
      {/* transparent circles */}
      <motion.div
        initial={{ x: -800, rotateX: 110, rotateY: 70 }}
        animate={{ x: 100 ,rotateX: 0, 
            rotateY: 0,y:160}}
        whileHover={{
          rotateX: 280,
          rotateY: 180,
          scale: 1.2,
        }}
        transition={{ duration: 1 }}
        style={{
          backgroundColor: "rgba(31, 31, 31, 0.71)",
          marginLeft: "700px",
        }}
        className="h-64 w-64 aspect-square rounded-full absolute top-44"
      ></motion.div>
      <motion.div
        initial={{ x: 800, rotateX: 360, rotateY: 180 }}
        animate={{ x: 100 ,rotateX: 0, 
            rotateY: 0,y:140}}
        whileHover={{
          rotateX: 280,
          rotateY: 180,
          scale: 1.2,
        }}
        transition={{ duration: 1 }}
        style={{
          backgroundColor: "rgba(31, 31, 31, 0.71)",
          marginLeft: "900px",
        }}
        className="h-64 w-64 mt-20 aspect-square rounded-full absolute top-44"
      ></motion.div>
      <motion.div
        initial={{ y: -800, rotateX: 10, rotateY: 280 }}
        animate={{ x:100,rotateX: 0, 
            rotateY: 0,y:100}}
        whileHover={{
          rotateX: 360,
          rotateY: 180,
          scale: 1.2,
        }}
        transition={{ duration: 1 }}
        style={{
          backgroundColor: "rgba(31, 31, 31, 0.71)",
          marginLeft: "800px",
          marginTop: "-150px",
        }}
        className="h-80 w-80 aspect-square rounded-full absolute top-44"
      ></motion.div>

      <div className="h-full flex flex-col justify-center items-start mt-12 ml-[-90px]">
        <h1 className="text-7xl ml-32 z-10">{name.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={charVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.9, delay: index * 0.1 }}
          style={{ display: "inline-block" }}
        >
          {char}
        </motion.span>
      ))}</h1>
        <h1 className="text-2xl ml-32 z-10 font-semibold">
        {det.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={char === " " ? null : charVariants1}
          initial={char === " " ? null : "initial"}
          animate={char === " " ? null : "animate"}
          transition={{ duration: 0.01, delay: index * 0.03 }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
        </h1>
        <motion.div 
        initial={{opacity:0,y:-10}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.7,ease:easeIn}}
        className="flex justify-center items-center gap-12 ml-[125px] mt-4">
          <a className="cursor-none transition-all ease-in-out hover:scale-110" href="https://www.linkedin.com/in/sangmesh-j-365a00237/" target="_blank" rel="noreferrer">
            <AiFillLinkedin
              style={{ height: "40px", width: "40px", position: "relative" ,color:"white"}}
            />
          </a>
          <a className="cursor-none transition-all ease-in-out hover:scale-110" href="https://github.com/Sangmesh0011/" target="_blank" rel="noreferrer">
            <AiFillGithub
              style={{ height: "40px", width: "40px", position: "relative",color:"white" }}
            />
          </a>
          <a className="cursor-none transition-all ease-in-out hover:scale-110" href="https://www.instagram.com/sangmesh0011/" target="_blank" rel="noreferrer">
            <AiFillInstagram
              style={{ height: "40px", width: "40px", position: "relative",color:"white" }}
            />
          </a>
        </motion.div>
      </div>
      
      <a className="absolute top-10 rounded-3xl right-10 cursor-none p-3 w-32 flex justify-center items-center h-auto text-white bg-transparent border-2 hover:bg-orange-300 hover:text-black hover:border-none transition-all ease-in-out hover:w-40" href="/Sangmesh_J.pdf" download="Sangmesh_J.pdf" rel="noreferrer">
              Resume (pdf)
        </a>
    </div>
  );
};

export default Home;
