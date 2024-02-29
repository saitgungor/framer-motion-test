import React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { useDimensions } from "../use-dimensions";

const sidebar = {
  open: (height = 1000) => ({
    transition: {
      ease: "linear",
      stiffness: 20,
      restDelta: 2,
      duration: 0.5,
    },
    width: 356,
  }),
  closed: {
    transition: {
      type: "",
      stiffness: 400,
      // damping: 40,
    },
  },
};

const sidebar2 = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Example1 = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  console.log(height);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="left-0 top-0 absolute bottom-0"
    >
      <motion.div className="bg-slate-100 absolute left-0 top-0 bottom-0" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default Example1;
