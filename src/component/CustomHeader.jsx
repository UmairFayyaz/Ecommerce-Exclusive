import { Select } from "antd";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import { CurrencyChange } from "../App";

const CustomHeader = () => {
  const { t } = useTranslation();
  const { currency, setCurrency } = useContext(CurrencyChange);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleCurrencyChange = (value) => {
    setCurrency(value);
  };
  return (
    <div className="flex justify-center w-full px-[20px] bg-[#000000]  ">
      <div className="flex flex-col md:flex-row justify-between w-full items-center min-h-[48px] py-[10px] gap-2 max-w-[1300px]">
        <div></div>
        <div>
          <h1 className="text-white text-[14px] font-normal text-center">
            {t("summerSale")}
            <b className="underline mx-[10px] cursor-pointer">ShopNow</b>
          </h1>
        </div>
        <div className="flex gap-2">
          <Select
            defaultValue="en"
            style={{ width: 120 }}
            onChange={handleLanguageChange}
            className="customHeaderSelect"
            placeholder={t("language")}
          >
            <Select.Option value="en">English</Select.Option>
            <Select.Option value="ur">اردو</Select.Option>
          </Select>
          <Select
            defaultValue="USD"
            style={{ width: 120 }}
            onChange={handleCurrencyChange}
            className="customHeaderSelect"
          >
            <Select.Option value="USD">USD</Select.Option>
            <Select.Option value="INR">INR</Select.Option>
            <Select.Option value="PKR">PKR</Select.Option>
          </Select>
        </div>
      </div>
    </div>
  );
};
export default CustomHeader;
