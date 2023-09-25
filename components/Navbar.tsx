"use client";

import { motion } from "framer-motion";
import styles from "@/styles";
import { navVariants } from "@/utils/motion";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="gradient-01 w-[50%] absolute inset-0" />
      <div className={`${styles.innerWidth} flex justify-between mx-auto`}>
        <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain cursor-pointer z-50"
        />
        <h2 className="font-extrabold text-white text-[24px] leading-[30px]">
          METAVERSE
        </h2>
        <img
          src="/menu.svg"
          alt="menu"
          className="w-[24px] h-[24px] object-contain cursor-pointer"
        />
      </div>
    </motion.nav>
  );
};
export default Navbar;
