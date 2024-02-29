import React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { useDimensions } from "../use-dimensions";

const sidebar = {
  open: {
    transition: {
      ease: "linear",
      stiffness: 20,
      restDelta: 2,
      duration: 0.5,
      when: "beforeChildren",
    },
    width: 356,
  },
  closed: {
    transition: {
      type: "",
      stiffness: 400,
      // damping: 40,
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
      className="absolute right-0 top-[65px] bg-slate-100 h-[calc(100vh-65px)]"
    >
      <motion.div variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default Example1;
