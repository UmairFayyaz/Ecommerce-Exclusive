import { memo } from "react";
import Card from "../../../component/Card";
import CategoriesHeading from "../../../component/CategoriesHeading";

import dataForCards from "../../../assist/dataForCards/data";

import { useTranslation } from "react-i18next";

const RelatedItem = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-[70px] ">
      <CategoriesHeading title={t("Related Item")} />

      <div className="flex gap-5 mt-[50px] flex-col md:flex-row w-full flex-wrap justify-center items-center">
        {dataForCards?.slice(10, 14).map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </div>
    </div>
  );
};
export default memo(RelatedItem);
