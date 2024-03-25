import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView();
  const containerRef = useRef();

  const containerVariants = {
    hidden: { opacity: 0, x: -250 },
    visible: { opacity: 1, x: -100 },
  };
  return (
    <div id="about">
      <div ref={containerRef}
        className="text-white mt-16 p-8"
        style={{
          background:
            "linear-gradient(to bottom left, rgba(0, 0, 0, 1), rgba(22, 22, 22, 1))",
        }}
      >
          <motion.div
            ref={ref}
            className="w-[50vw] h-[70px] bg-orange-500"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.7 }}
          ></motion.div>
        <h1 className="text-8xl mb-8 ml-[600px] text-nowrap mt-[-90px]">
          know me better
        </h1>
        <ul style={{ letterSpacing: "5px" }} className="text-2xl mt-14">
          <li>Bringing beautiful designs to life.</li>
          <li>
            Well versed with MERN stack - Full Stack Web Development.
          </li>
          <li>
            I personally find frontend development more challenging and hence fun.
          </li>
          <li>I stay updated with new technolgies and frameworks.</li>
          <li>
            React JS, Figma, UI/UX, HTML, CSS, JavaScript are my favourite.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
