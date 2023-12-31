"use client";

import { motion } from "framer-motion";
import styles from "@/styles";
import { footerVariants } from "@/utils/motion";
import { socials } from "@/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Enter the Metaverse
          </h4>
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
          >
            <Image
              src="/headset.svg"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="text-[16px] text-white uppercase">
              enter metaverse
            </span>
          </button>
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white">Metaverse</h4>
            <p className="text-white opacity-50 text-[14px]">
              No copyrights yo!;) 2023 ©
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <Image
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
export default Footer;
