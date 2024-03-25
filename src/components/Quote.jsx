import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const Quote = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const top = document.documentElement.scrollTop;
      const bottom = top + window.innerHeight;
      const element = document.getElementById('quote');

      if (element.offsetTop < bottom && element.offsetTop + element.offsetHeight > top) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 1, delay: 0.5 }
      });
    } else {
      controls.start({
        opacity: 0,
        scale: 0.5,
        transition: { duration: 1 }
      });
    }
  }, [isVisible, controls]);

  return (
    <div id="quote" className="max-h-[40%] w-full p-16 bg-green-400 flex justify-center items-center">
      <motion.blockquote
        initial={{ opacity: 0, scale: 0 }}
        animate={controls}
        className="text-4xl text-center font-mono font-bold text-slate-800 px-6 py-1 rounded-lg"
      >
        "Front-end development is like playing jazz on a broken piano while blindfolded; it's chaotic, unpredictable, and sometimes downright absurd, but when you hit the right notes, it's pure magic."
      </motion.blockquote>
    </div>
  );
};

export default Quote;
