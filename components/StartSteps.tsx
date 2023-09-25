import styles from "@/styles";

const StartSteps = ({ number, text }: { number: number; text: string }) => {
  return (
    <div className={`${styles.flexCenter}`}>
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d] text-white font-bold text-[20px]`}
      >
        0{number}
      </div>
      <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">
        {text}
      </p>
    </div>
  );
};
export default StartSteps;
