import React from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
  open: {
    transition: {
      stiffness: 20,
      restDelta: 2,
      duration: 0.5,
      when: "beforeChildren",
    },
    width: 356,
  },
  closed: {
    transition: {
      stiffness: 400,
      delay: 0.3,
      // damping: 40,
    },
    width: 48,
  },
};

const Example1 = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="absolute right-0 top-[65px] bg-slate-100 h-[calc(100vh-65px)] border-l border-l-slate-300"
    >
      <motion.div variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default Example1;
