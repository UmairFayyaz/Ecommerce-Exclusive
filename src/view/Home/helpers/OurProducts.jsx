import { memo, useMemo } from "react";
import Card from "../../../component/Card";
import CategoriesHeading from "../../../component/CategoriesHeading";
import Wrapper from "../../../component/Wrapper";
import dataForCards from "../../../assist/dataForCards/data";

import { useTranslation } from "react-i18next";

const OurProducts = () => {
  const { t } = useTranslation();
  const cards = dataForCards?.slice(10, 16);
  const hiddenComponents = useMemo(() => {
    return Array(
      cards?.length > 0
        ? cards?.length > 4
          ? cards?.length % 4
          : 4 - cards?.length
        : 0
    )
      .fill(null)
      .map((_, index) => (
        <div key={index} className="invisible w-[270px]">
          Hidden Component {index + 1}
        </div>
      ));
  }, [cards?.length]);
  return (
    <div className="mt-[70px] ">
      <Wrapper>
        <div>
          <CategoriesHeading title={t("ourProducts")} />
          <div className=" w-full  mt-[10px]">
            <h3 className="text-[36px] font-semibold w-full ">
              {t("exploreOurProducts")}
            </h3>
          </div>
          <div className="flex gap-5 mt-[20px] flex-col md:flex-row w-full flex-wrap justify-center items-center">
            {cards.map((item, index) => (
              <Card {...item} key={index} />
            ))}
            {hiddenComponents}
          </div>

          <div className="flex justify-center mt-[20px]">
            <button className="px-[30px] py-[12px] h-max bg-[#DB4444] text-white rounded ">
              {t("viewAllProducts")}
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default memo(OurProducts);
