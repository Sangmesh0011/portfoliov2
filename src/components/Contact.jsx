import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.4
  });

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  useEffect(() => {
    if (!inView) {
      setAnimate(false);
    }
  }, [inView]);

  return (
    <div id="contactpage" className="w-full flex justify-center items-center gap-[100px] h-[40vh] p-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -100 }}
        animate={animate ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        style={{ letterSpacing: "18px" }}
        className="text-[70px] text-gray-600 font-semibold w-1/2"
      >
        CONTACT
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={animate ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
        className="w-1/2 flex justify-center items-center gap-2"
      >
        <motion.h1
          initial={{ opacity: 0, x: 90 }}
          animate={animate ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-fit text-2xl flex justify-center items-center gap-3"
        >
          <AiOutlineMail />
          sangmesh0011@gmail.com
        </motion.h1>
        
        <motion.h1
          initial={{ opacity: 0, x: 90 }}
          animate={animate ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-fit text-2xl flex justify-center items-center gap-3"
        >
          <AiOutlinePhone />
          +91 8050018356
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default Contact;
