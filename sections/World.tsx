"use client";

import { motion } from "framer-motion";
import { TypingText, TitleText } from "@/components";
import styles from "@/styles";
import { staggerContainer, fadeIn } from "@/utils/motion";

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} flex flex-col`}
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| People on the World" textStyles="text-center" />
          <TitleText
            title={
              <>
                Track friends around you and invite them to play together in the
                same world
              </>
            }
            textStyles="text-center"
          />
          <div className="relative mt-[68px] flex w-full lg:height-[550px]">
            <img
              src="/map.png"
              alt="map"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
              <img
                src="/people-01.png"
                alt="people"
                className="w-full h-full"
              />
            </div>

            <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
              <img
                src="/people-02.png"
                alt="people"
                className="w-full h-full"
              />
            </div>

            <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
              <img
                src="/people-03.png"
                alt="people"
                className="w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default World;
