import { t } from "i18next";
import aboutImage from "../../../assist/image/about.png";
const OurStory = () => {
  return (
    <div className=" w-full flex flex-col  lg:flex-row  items-center gap-10 mt-[50px]">
      <div className="w-full h-max mb-[50px]">
        <h1 className="text-[54px] font-semibold">{t("ourStory")}</h1>
        <p className="mt-[30px] text-[16px] font-normal">
          {t("storyPart1")}
          <br />
          <br />
          {t("storyPart2")}
        </p>
      </div>
      <div className="w-full lg:w-[90%]">
        <img src={aboutImage} alt="About image" />
      </div>
    </div>
  );
};
export default OurStory;
