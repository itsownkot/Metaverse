"use client";

import { motion } from "framer-motion";
import { TypingText, TitleText, InsightCard } from "@/components";
import styles from "@/styles";
import { staggerContainer } from "@/utils/motion";
import { insights } from "@/constants";

const Insights = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} flex flex-col`}
      >
        <TypingText title="| Insight" textStyles="text-center" />
        <TitleText title="Insight about metaverse" textStyles="text-center" />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((insight, i) => (
            <InsightCard key={`insight-${i}`} {...insight} index={i + 1} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default Insights;
