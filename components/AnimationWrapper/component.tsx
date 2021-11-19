import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Props } from "./props";

export const AnimationWrapper = ({ time, children }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: time }}
    >
      {children}
    </motion.div>
  );
};
