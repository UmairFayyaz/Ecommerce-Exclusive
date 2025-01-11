import { t } from "i18next";
import Card from "../../../component/Card";
import CategoriesHeading from "../../../component/CategoriesHeading";
import dataForCards from "../../../assist/dataForCards/data";

const JustForYou = () => {
  return (
    <div>
      <div className=" w-full flex justify-between items-center">
        <CategoriesHeading title={t("justForYou")} />
        <button className="px-[30px] py-[12px] h-max  rounded  mt-[20px] border-[1px] border-[rgba(0, 0, 0, 0.4)] font-semibold whitespace-nowrap ">
          {t("seeAll")}
        </button>
      </div>
      <div className="flex gap-5 mt-[30px] flex-col md:flex-row w-full flex-wrap justify-center items-center">
        {dataForCards?.slice(5, 9).map((item, index) => (
          <Card {...item} wishListJustForYou={true} key={index} />
        ))}
      </div>
    </div>
  );
};
export default JustForYou;
