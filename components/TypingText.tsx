"use client";

import { textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";

type TypingProps = {
  title: string;
  textStyles?: string;
};
type TitleProps = {
  title: React.ReactNode;
  textStyles?: string;
};

export const TypingText = ({ title, textStyles }: TypingProps) => {
  return (
    <motion.p
      variants={textContainer}
      className={`font-normal text-[14px] ${textStyles}`}
    >
      {Array.from(title).map((letter, i) => (
        <motion.span variants={textVariant2} key={i}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export const TitleText = ({ title, textStyles }: TitleProps) => {
  return (
    <motion.h2
      variants={textVariant2}
      className={`${textStyles} mt-[8px] font-bold md:text-[64px] text-[40px] text-white`}
    >
      {title}
    </motion.h2>
  );
};
