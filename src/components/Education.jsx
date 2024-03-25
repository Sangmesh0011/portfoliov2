import { easeInOut, motion } from "framer-motion";
import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
const Education = () => {
  const { ref, inView } = useInView();
  const containerRef = useRef();
  const containerVariants = {
    v1: { x: -200 },
    v2: { x: 170 },
  };
  return (
    <div id="edu"
      ref={containerRef}
      className="flex flex-col justify-center items-center w-full"
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="v1"
        animate={inView ? "v2" : "v1"}
        transition={{ duration: 1, delay: 0.1, ease: easeInOut }}
        style={{
          backgroundColor: "rgba(31, 31, 31, 0.41)",
          marginLeft: "700px",
          marginTop: "-70px",
        }}
        className="h-6 w-[70%] aspect-square absolute left-[-760px] blur-md"
      ></motion.div>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="v1"
        animate={inView ? "v2" : "v1"}
        transition={{ duration: 1, ease: easeInOut }}
        style={{
          backgroundColor: "rgba(31, 31, 31, 0.71)",
          marginLeft: "700px",
          marginTop: "-120px",
        }}
        className="h-4 w-[70%] rounded-full absolute left-[-760px]"
      ></motion.div>
      <div className="text-[200px] font-bold  text-gray-400 mt-[-40px]">
        EDUCATION
      </div>
      <div className="flex flex-row w-full px-16 py-8 bg-transparent mt-[-10px]">
        <div className="w-2/5">
          <motion.img
          ref={ref}
          initial={{x:-350}}
          animate={inView?{x:0}:{x:-350}}
          whileHover={{x:-350}}
          transition={{duration:1,delay:0.6}}
            src="chopper.png"
            className="bg-cover w-42 h-[40%] absolute left-0"
            alt="chopper"
            style={{marginTop:"40px"}}
          />
        </div>
        <div className="w-3/5 flex flex-col justify-end items-end gap-4 px-11 ml-[165px]">
          <div className="flex flex-col justify-end items-end">
            <h1 className="text-4xl font-bold">Bachelor of Engineering</h1>
            <h2 className="text-xl font-semibold">
              Computer Science and Engineering
            </h2>
            <span className="text-xl font-normal">2020-2024</span>
          </div>
          <div className="flex flex-col justify-end items-end">
            <h1 className="text-4xl font-bold">Pre University</h1>
            <h2 className="text-xl font-semibold">Science</h2>
            <span className="text-xl font-normal">2018-2020</span>
          </div>
          <div className="flex flex-col justify-end items-end">
            <h1 className="text-4xl font-bold">School</h1>
            <span className="text-xl font-normal">2018</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
