import React, { useState } from "react";
import arroeImage from "../../../assist/image/arrow.svg";
import { t } from "i18next";
import sliderImage from "../../../assist/image/sliderImage.png";
import Wrapper from "../../../component/Wrapper";
import { Carousel } from "antd";
const SidebarsAndContent = () => {
  return (
    <Wrapper className="flex flex-col md:flex-row justify-between gap-2">
      <Sidebar />
      <div className="pt-[40px] h-full md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px]">
        <Carousel
          effect="scrollx"
          className="w-full"
          autoplay
          autoplaySpeed={1500}
          dotWidth={10}
        >
          <div>
            <img className="w-full" src={sliderImage} alt="slider image" />
          </div>
          <div>
            <img className="w-full" src={sliderImage} alt="slider image" />
          </div>
          <div>
            <img className="w-full" src={sliderImage} alt="slider image" />
          </div>
          <div>
            <img className="w-full" src={sliderImage} alt="slider image" />
          </div>
        </Carousel>
      </div>
    </Wrapper>
  );
};
export default SidebarsAndContent;

const Sidebar = () => {
  const data = [
    { title: t("womanFashion"), subtitle: [t("bag"), t("shoes")] },
    { title: t("menFashion"), subtitle: [t("bag"), t("shoes")] },
    { title: t("electronics") },
    { title: t("homeLifestyle") },
    { title: t("medicine") },
    { title: t("sportsOutdoor") },
    { title: t("babyToys") },
    { title: t("groceriesPets") },
    { title: t("healthBeauty") },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSubmenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" flex w-full md:w-[250px] h-full ">
      <ul className=" pt-[40px] text-[16px] font-normal px-[20px] w-full">
        {data.map((item, index) => (
          <li key={index} className="mb-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSubmenu(index)}
            >
              <span>{item.title}</span>
              {item.subtitle && (
                <img
                  src={arroeImage}
                  className={`transition-transform duration-200 transform ${
                    activeIndex === index ? "rotate-90" : ""
                  }`}
                />
              )}
            </div>

            {item.subtitle && activeIndex === index && (
              <ul className="pl-6 mt-2 transition-transform duration-200 transform ">
                {item.subtitle.map((subItem, subIndex) => (
                  <li key={subIndex} className="py-1">
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="h-full bg-gray-light w-0 md:w-[.5px]"></div>
    </div>
  );
};
