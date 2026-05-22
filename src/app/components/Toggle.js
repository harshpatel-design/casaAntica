"use client";

import { FaAngleUp } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Toggle() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.5, rotate: -180 }}
      animate={{
        opacity: showButton ? 1 : 0,
        y: showButton ? 0 : 100,
        scale: showButton ? 1 : 0.5,
        rotate: showButton ? 0 : -180,
      }}
      whileHover={{
        scale: 1.1,
        y: -5,
      }}
      whileTap={{
        scale: 0.9,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="bg-black h-[64px] w-[50px] rounded-full flex items-center justify-center fixed bottom-10 right-10 z-50 cursor-pointer"
      onClick={scrollToTop}
      role="button"
      tabIndex={0}
    >
      <motion.div
        animate={{
          y: [0, -4, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        <FaAngleUp className="text-white text-[20px]" />
      </motion.div>
    </motion.div>
  );
}

export default Toggle;
