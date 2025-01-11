import { t } from "i18next";
import CategoriesHeading from "../../../component/CategoriesHeading";
import Wrapper from "../../../component/Wrapper";
import { useEffect, useState } from "react";
import imageArrow from "../../../assist/image/arrow-left.svg";
import i18n from "../../../component/i18n";
import Card from "../../../component/Card";
import dataForCards from "../../../assist/dataForCards/data";
import useScreenSize from "../../../component/hook";

const data = dataForCards?.slice(0, 14);
const Todays = () => {
  const [index, setIndex] = useState(0);
  const screenSize = useScreenSize();
  const maxCardShow =
    screenSize === "sm" || screenSize === "xs"
      ? 1
      : screenSize === "md"
      ? 2
      : screenSize === "lg"
      ? 3
      : 4;

  const handleLeftClick = () => {
    setIndex((pre) => (pre > 0 ? index - 1 : data?.length - maxCardShow));
  };
  console.log(index, data);
  const handleRightClick = () => {
    setIndex((pre) => (pre < data.length - maxCardShow ? index + 1 : 0));
  };
  return (
    <div className="mt-[50px]">
      <Wrapper>
        <>
          <CategoriesHeading title={t("todays")} />
          <div className="flex flex-col md:flex-row w-full  items-center gap-5 mt-[10px]">
            <h3 className="text-[36px] font-semibold w-full md:w-[300px] text-left ">
              {t("flashSales")}
            </h3>
            <Clock />
            <div
              className={`flex gap-2 ${
                i18n.language === "ur" ? " flex-row-reverse" : " flex-row"
              }`}
            >
              <button
                onClick={handleLeftClick}
                className="bg-[#F5F5F5] p-[10px] rounded-full"
              >
                <img src={imageArrow} alt="arrow" className="w-[40px] " />
              </button>
              <button
                onClick={handleRightClick}
                className="bg-[#F5F5F5] p-[10px] rounded-full"
              >
                <img
                  src={imageArrow}
                  className="rotate-180 w-[40px] "
                  alt="arrow"
                />
              </button>
            </div>
          </div>
          <div className="flex w-full justify-center mt-[20px] ">
            <div className="w-full max-w-[270px] md:max-w-[560px] lg:max-w-[850px]  xl:max-w-[1140px]  overflow-hidden">
              <div
                className="flex justify-start  gap-5 mt-[20px] transition-transform duration-500 "
                style={{
                  transform:
                    i18n.language === "ur"
                      ? `translateX(${index * 290}px)`
                      : `translateX(-${index * 290}px)`,
                }}
              >
                {data.map((item, idx) => (
                  <div key={idx}>
                    <Card {...item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      </Wrapper>
    </div>
  );
};
export default Todays;

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
    <div className="flex  w-full space-x-4 text-2xl ">
      <div className="flex flex-col items-center w-[50px]">
        <span className="font-medium text-[12px] leading-3">{t("day")}</span>
        <span className="text-[32px] font-bold">{time.days}</span>
      </div>
      <div className="text-[#E07575] mx-[5px] mt-[10px]">:</div>
      <div className="flex flex-col items-center w-[50px]">
        <span className="font-medium text-[12px] leading-3">{t("hours")}</span>
        <span className="text-[32px] font-bold">{time.hours}</span>
      </div>
      <div className="text-[#E07575] mx-[5px] mt-[10px]">:</div>

      <div className="flex flex-col items-center w-[50px]">
        <span className="font-medium text-[12px] leading-3">{t("minute")}</span>
        <span className="text-[32px] font-bold">{time.minutes}</span>
      </div>
      <div className="text-[#E07575] mx-[5px] mt-[10px]">:</div>

      <div className="flex flex-col items-center w-[50px]">
        <span className="font-medium text-[12px] leading-3">{t("second")}</span>
        <span className="text-[32px] font-bold">{time.seconds}</span>
      </div>
    </div>
  );
};
