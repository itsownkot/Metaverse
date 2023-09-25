"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";

const InsightCard = ({
  index,
  title,
  subtitle,
  imgUrl,
}: {
  index: number;
  title: string;
  subtitle: string;
  imgUrl: string;
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 1)}
      className="flex md:flex-row flex-col gap-4"
    >
      <Image
        src={imgUrl}
        alt="insight image"
        className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
      />
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col flex-1 md:ml-[62px] max-w-[650px]">
          <h3 className="lg:text-[42px] text-[26px] text-white">{title}</h3>
          <p className="mt-[16px] lg:text-[20px] text-[14px]">{subtitle}</p>
        </div>
        <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
          <Image
            src="/arrow.svg"
            alt="arrow"
            className="w-[40%] h-[40%] object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};
export default InsightCard;
