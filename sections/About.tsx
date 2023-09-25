"use client";

import { motion } from "framer-motion";
import { TypingText } from "@/components";
import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";

const About = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.flexCenter} ${styles.innerWidth} flex-col`}
      >
        <TypingText title="| About Metaverses" textStyles="text-center" />

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center"
        >
          <span className="font-extrabold text-white">Lorem ipsum</span> dolor
          sit amet, consectetur adipiscing elit. Suspendisse orci velit,
          vestibulum eu quam vel, auctor dapibus diam. Maecenas faucibus, risus
          sed interdum blandit, dui neque interdum justo, id pharetra augue
          ipsum vel leo.{" "}
          <span className="font-extrabold text-white">Curabitur lacinia</span>{" "}
          ex lectus, ut tristique urna sollicitudin a. Morbi et massa eu ipsum
          malesuada condimentum commodo eu mi.{" "}
          <span className="font-extrabold text-white">Aenean</span> rutrum purus
          id lectus ullamcorper, ac egestas erat mattis. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Phasellus sed vulputate magna. Vivamus at pulvinar orci. Curabitur
          dolor urna,{" "}
          <span className="font-extrabold text-white">volutpat et enim in</span>
          , porttitor gravida est. Suspendisse nec nisl magna.
        </motion.p>

        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </section>
  );
};
export default About;
