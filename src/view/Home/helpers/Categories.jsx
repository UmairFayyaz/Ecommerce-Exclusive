import CategoriesHeading from "../../../component/CategoriesHeading";
import Wrapper from "../../../component/Wrapper";
import { IoCameraOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { CgAppleWatch, CgGames } from "react-icons/cg";
import { LiaHeadphonesAltSolid } from "react-icons/lia";
import { useState } from "react";
import { t } from "i18next";

const Categories = () => {
  const data = [
    { image: <IoPhonePortraitOutline />, title: "phones" },
    { image: <HiOutlineComputerDesktop />, title: "computers" },
    { image: <CgAppleWatch />, title: "smartWatch" },
    { image: <IoCameraOutline />, title: "camera" },
    { image: <LiaHeadphonesAltSolid />, title: "headPhones" },
    {
      image: <CgGames />,
      title: "gaming",
    },
  ];
  return (
    <div className="mt-[70px]">
      <Wrapper>
        <div className="border-t-[.5px] border-gray-light  pt-[70px]">
          <CategoriesHeading title={t("categories")} />
          <div className=" w-full mt-[10px]">
            <h3 className="text-[36px] font-semibold  ">
              {t("browseByCategory")}
            </h3>
          </div>
          <div className="flex gap-5 mt-[20px] flex-col md:flex-row w-full flex-wrap">
            {data.map((item, index) => (
              <CardList data={item} key={index} />
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default Categories;
const CardList = ({ data }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`min-w-[170px] w-full md:w-[30.3%] lg:w-[23%] xl:w-[15.3%] cursor-pointer min-h-[145px]  py-[40px]  border-[1px] rounded border-gray-light flex items-center justify-center flex-col transition-all duration-300 ${
        hover ? "bg-[#DB4444] text-white" : "bg-transparent text-black"
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="text-[56px] font-light">{data.image}</div>

      <p className="text-[16px] font-normal mt-[10px]">{t(data.title)}</p>
    </div>
  );
};
