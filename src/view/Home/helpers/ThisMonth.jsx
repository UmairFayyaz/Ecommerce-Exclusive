import { t } from "i18next";
import dataForCards from "../../../assist/dataForCards/data";
import Card from "../../../component/Card";
import CategoriesHeading from "../../../component/CategoriesHeading";
import Wrapper from "../../../component/Wrapper";

const ThisMonth = () => {
  const data = dataForCards?.slice(6, 10);

  return (
    <div className="mt-[70px] ">
      <Wrapper>
        <div className="border-t-[.5px] border-gray-light  pt-[70px]">
          <CategoriesHeading title={t("thisMonth")} />
          <div className="flex w-full  items-center justify-between flex-col md:flex-row gap-2 mt-[10px]">
            <h3 className="text-[36px] font-semibold w-full md:w-max">
              {t("bestSellingProducts")}
            </h3>
            <button className="px-[30px] py-[12px] h-max bg-[#DB4444] text-white rounded ">
              {t("viewAll")}
            </button>
          </div>
          <div className="flex gap-5 mt-[20px] flex-col md:flex-row w-full flex-wrap justify-center items-center">
            {data.map((item, index) => (
              <Card {...item} key={index} />
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default ThisMonth;
