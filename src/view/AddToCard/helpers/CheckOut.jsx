import { useNavigate } from "react-router";
import { AddToCardChange, CurrencyChange } from "../../../App";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

const CheckOut = () => {
  const { addToCard } = useContext(AddToCardChange);
  const { currency } = useContext(CurrencyChange);

  const { t } = useTranslation();
  const navigate = useNavigate();
  const formatPrice = (price) => {
    if (currency === "PKR") return `${price * 250} PKR`;
    if (currency === "INR") return `₹${price * 86}`;
    return `$${price}`;
  };

  return (
    <div className="flex justify-between flex-col md:flex-row mt-[50px] gap-4">
      <div className="flex gap-4 text-[16px] font-medium ">
        <input
          className="px-[24px] py-[12px] h-max border-[1px] rounded "
          placeholder={t("couponCode")}
        />
        <button className="px-[30px] py-[12px] h-max bg-[#DB4444] text-white rounded ">
          {t("applyCoupon")}
        </button>
      </div>
      <div className="border-[1.5px] p-[20px] rounded w-full md:min-w-[400px] md:max-w-[500px] ">
        <h1 className="text-[20px] font-semibold">{t("cartTotal")}</h1>
        <div className="border-b-[1px] h-[40px] flex justify-between text-[16px] font-medium mt-[15px]">
          <p>{t("subtotal")}:</p>
          <p>
            {formatPrice(
              addToCard.reduce(
                (total, item) => total + item.quantity * item.price,
                0
              )
            )}
          </p>
        </div>
        <div className="border-b-[1px] h-[40px] flex justify-between text-[16px] font-medium mt-[15px]">
          <p>{t("shipping")}:</p>
          <p>Free</p>
        </div>
        <div className="border-b-[1px] h-[40px] flex justify-between text-[16px] font-medium mt-[15px]">
          <p>{t("total")}:</p>
          <p>
            {formatPrice(
              addToCard.reduce(
                (total, item) => total + item.quantity * item.price,
                0
              )
            )}
          </p>
        </div>
        <div className="flex w-full justify-center mt-[30px]">
          <button
            className="px-[30px] py-[12px] h-max bg-[#DB4444] text-white rounded "
            onClick={() => navigate("/checkOut")}
          >
            {t("proceesTocheckout")}
          </button>
        </div>
      </div>
    </div>
  );
};
export default CheckOut;
