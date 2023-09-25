"use client";

import { motion } from "framer-motion";
import { TypingText, TitleText, ExploreCard } from "@/components";
import styles from "@/styles";
import { staggerContainer } from "@/utils/motion";
import { useState } from "react";
import { exploreWorlds } from "@/constants";

const Explore = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section id="explore" className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer(0.1, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />

        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" /> to
              explore
            </>
          }
          textStyles="text-center"
        />

        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, i) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={i}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default Explore;
