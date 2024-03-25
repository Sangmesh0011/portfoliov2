import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import Button from "./Button";
import Node from "./Node";

const ProjectCard = ({ name, details, skills, img, github, live }) => {
  const { ref, inView } = useInView();
  const containerRef = useRef();

  const containerVariants = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div ref={containerRef} className="flex flex-col">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.7 }}
        className="cursor-none w-full m-24 md:w-[1000px] h-auto p-6 md:h-auto md:p-0 shadow-2xl flex flex-col justify-center items-center md:flex md:flex-row md:justify-center md:items-center gap-4"
      >
        <div className="w-3/5">
          <img src={img} alt="i" className="h-[100%]" />
        </div>
        <div className="w-2/5 flex flex-col gap-4">
          <h1 className="text-4xl">{name}</h1>
          <span>{details}</span>
          <div
            style={{ overflow: "hidden" }}
            className="flex flex-row gap-4 overflow-scroll scroll"
          >
            {skills.map((skill, index) => {
              return <Node key={index} name={skill} />;
            })}
          </div>
          <div className="flex flex-row">
            <Button name={"Code"} link={github} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
