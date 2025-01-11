import Wrapper from "../../../component/Wrapper";
import icon1 from "../../../assist/image/icon-delivery.svg";
import icon2 from "../../../assist/image/Icon-Customer service.svg";
import icon3 from "../../../assist/image/shield-tick.svg";
import { t } from "i18next";
import { CurrencyChange } from "../../../App";
import { useContext } from "react";

const CustomerService = () => {
  const { currency } = useContext(CurrencyChange);

  const formatPrice = (price) => {
    if (currency === "PKR") return `${price * 250} PKR`;
    if (currency === "INR") return `₹${price * 86}`;
    return `$${price}`;
  };
  return (
    <div className="my-[70px] mb-[100px] ">
      <Wrapper>
        <div className="w-full flex justify-center gap-24 flex-col lg:flex-row pt-[40px]">
          <div className="flex flex-col items-center">
            <div className="p-[11px] rounded-full bg-[#2F2E30]">
              <div className="p-[5px] rounded-full bg-black">
                <img src={icon1} alt="icon" />
              </div>
            </div>
            <h1 className="font-semibold text-[20px] leading-[28px] mt-[24px]">
              {t("fREEANDFASTDELIVER")}
            </h1>
            <p className="text-[14px] font-normal">
              {t("freedeliveryforallordersover")} {formatPrice(140)}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-[11px] rounded-full bg-[#2F2E30]">
              <div className="p-[5px] rounded-full bg-black">
                <img src={icon2} alt="icon" />
              </div>
            </div>
            <h1 className="font-semibold text-[20px] leading-[28px] mt-[24px]">
              {t("cUSTOMERSERVICE")}
            </h1>
            <p className="text-[14px] font-normal">
              {t("friendlycustomersupport")}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-[11px] rounded-full bg-[#2F2E30]">
              <div className="p-[5px] rounded-full bg-black">
                <img src={icon3} alt="icon" />
              </div>
            </div>
            <h1 className="font-semibold text-[20px] leading-[28px] mt-[24px]">
              {t("mONEYBACKGUARANTEE")}
            </h1>
            <p className="text-[14px] font-normal">
              {t("wereurnmoneywithin30days")}
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default CustomerService;
