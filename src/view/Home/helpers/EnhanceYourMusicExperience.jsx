import { t } from "i18next";
import Wrapper from "../../../component/Wrapper";
import { useEffect, useState } from "react";
import speakerImage from "../../../assist/image/Speaker.png";

const EnhanceYourMusicExperience = () => {
  return (
    <div className="mt-[100px] ">
      <Wrapper>
        <div className="flex py-[70px] px-[60px] bg-black h-full flex-col lg:flex-row gap-20 lg:gap-3 relative overflow-hidden">
          <div className="h-max">
            <h1 className="text-[#00FF66] text-[16px] font-semibold">
              {t("categories")}
            </h1>
            <p className="text-[#FAFAFA] text-[48px] font-semibold leading-[60px] mt-[20px]">
              {t("enhanceYourMusicExperience")}
            </p>
            <Clock />
            <button className="px-[30px] py-[12px] h-max bg-[#00FF66] text-white rounded  mt-[40px]">
              {t("buyNow")}
            </button>
          </div>
          <div className="h-full flex items-center relative ">
            <img
              className="max-w-[568px] w-full relative z-10"
              src={speakerImage}
              alt="speaker Image"
            />
            <div className="absolute rounded-full w-full h-full bg-[#D9D9D9] blur-[200px]"></div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default EnhanceYourMusicExperience;
const Clock = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = new Date("2025-01-20").getTime() - now.getTime();
      const totalSeconds = Math.floor(diff / 1000);

      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex  w-full gap-3 text-2xl  mt-[25px]">
      <div className="flex flex-col items-center w-[62px] bg-white h-[62px] justify-center rounded-full">
        <span className="text-[16px] font-bold leading-[18px]">
          {time.days}
        </span>
        <span className="font-medium text-[11px] leading-[12px] ">
          {t("day")}
        </span>
      </div>
      <div className="flex flex-col items-center w-[62px] bg-white h-[62px] justify-center rounded-full">
        <span className="text-[16px] font-bold leading-[18px]">
          {time.hours}
        </span>
        <span className="font-medium text-[11px] leading-[12px] ">
          {t("hours")}
        </span>
      </div>

      <div className="flex flex-col items-center w-[62px] bg-white h-[62px] justify-center rounded-full">
        <span className="text-[16px] font-bold leading-[18px]">
          {time.minutes}
        </span>
        <span className="font-medium text-[11px] leading-[12px] ">
          {t("minute")}
        </span>
      </div>

      <div className="flex flex-col items-center w-[62px] bg-white h-[62px] justify-center rounded-full">
        <span className="text-[16px] font-bold leading-[18px]">
          {time.seconds}
        </span>
        <span className="font-medium text-[11px] leading-[12px] ">
          {t("second")}
        </span>
      </div>
    </div>
  );
};
