import { useState } from "react";
import { t } from "i18next";
import { CiBag1, CiShop } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";

const CustomerActive = () => {
  const data = [
    {
      image: <CiShop />,
      title: "SellersActiveonOurSite",
      value: "10.5k ",
    },
    {
      image: <AiOutlineDollar />,
      title: "monthlyProductSale",
      value: "33k",
    },
    {
      image: <LiaShoppingBagSolid />,
      title: "customersActiveonOurSite",
      value: "45.5k",
    },
    {
      image: <CiBag1 />,
      title: "annualGrossSales",
      value: "25k",
    },
  ];
  return (
    <div className="mt-[70px] flex justify-center w-full ">
      <div className="flex gap-5 mt-[20px] flex-col md:flex-row  flex-wrap justify-center w-full">
        {data.map((item, index) => (
          <CardList data={item} key={index} />
        ))}
      </div>
    </div>
  );
};
export default CustomerActive;
const CardList = ({ data }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`min-w-[170px] w-full md:w-[45%]  lg:w-[23%]  cursor-pointer min-h-[145px]  py-[40px]  border-[1px] rounded border-[rgba(0, 0, 0, 0.3)] flex items-center justify-center flex-col transition-all duration-300 ${
        hover ? "bg-[#DB4444] text-white" : "bg-transparent text-black"
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`p-[11px] rounded-full  ${
          hover ? " bg-[#ffffff59] " : "bg-[#2F2E30]"
        }`}
      >
        <div
          className={`p-[5px] rounded-full text-[30px]  ${
            hover ? " text-black bg-white" : " bg-black text-white"
          }`}
        >
          {data.image}
        </div>
      </div>

      <h1 className=" font-bold mt-[10px] text-[32px]">{data.value}</h1>
      <p className="text-[16px] font-normal">{t(data.title)}</p>
    </div>
  );
};
