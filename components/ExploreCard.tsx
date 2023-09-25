"use client";

import { motion } from "framer-motion";
import styles from "@/styles";
import { fadeIn } from "@/utils/motion";

interface ExploreProps {
  index: number;
  handleClick: (newState: string) => void;
  active: string;
  title: string;
  imgUrl: string;
  id: string;
}

const ExploreCard = ({
  index,
  handleClick,
  active,
  title,
  imgUrl,
  id,
}: ExploreProps) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex[0.5] flex-[2]"
      } ${
        styles.flexCenter
      } min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3 className="font-semibold text-[18px] sm:text-[26px] text-white absolute z-0 lg:bottom-20 lg:-rotate-90 lg:origin-center">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 justify-start w-full max-h-[90%] flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <div
            className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] mb-[16px] glassmorphism`}
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="font-normal text-[16px] text-white uppercase leading-[20px]">
            Enter the Metaverse
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};
export default ExploreCard;
