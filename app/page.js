"use client";
import { AnimatePresence, motion, useAnimate, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import Example1 from "./example1";

const container = {
  hidden: {
    transition: {
      staggerChildren: 0.3, // Adjust this value for the desired delay between children
      staggerDirection: -1, // Adjust this value for the desired delay between children
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.3, // Adjust this value for the desired delay between children
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Home() {
  const controls = useAnimationControls();
  console.log(controls);
  return (
    // <AnimatePresence>
    //   <motion.ul
    //     className="w-36 h-36 grid grid-cols-2 gap-4 p-4 bg-gray-300 bg-opacity-30 overflow-hidden m-0 list-none rounded-lg"
    //     variants={container}
    //     initial="visible"
    //     animate={controls}
    //     exit={{ scale: 0, x: [0, 100, 0] }}
    //     onMouseEnter={() => controls.start("hidden")}
    //     onMouseLeave={() => controls.start("visible")}
    //   >
    //     {[0, 1, 2, 3].map((index) => (
    //       <motion.li key={index} className="bg-white rounded-full" variants={item} />
    //     ))}
    //   </motion.ul>
    // </AnimatePresence>
    <Example1 />
  );
}
