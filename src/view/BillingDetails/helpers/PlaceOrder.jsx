import { useNavigate } from "react-router";
import { AddToCardChange, CurrencyChange } from "../../../App";
import { useContext } from "react";
import image1 from "../../../assist/image/banklogo.png";
import { useTranslation } from "react-i18next";

const PlaceOrder = () => {
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
    <div className="flex items-center flex-col">
      <div className="w-max">
        <div className=" w-full ">
          {addToCard.map((item, key) => (
            <CartItem key={key} data={item} />
          ))}
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
        </div>
        <div className="flex gap-2 mt-[20px]">
          <div className="flex gap-5 flex-col  text-[16px] w-full">
            <div className="flex items-center gap-2">
              <input type="radio" id="age1" name="age" value="30" />
              <label for="age1">{t("bank")}</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" id="age2" name="age" value="60" />
              <label for="age2">{t("cashOnDelivery")}</label>
            </div>
          </div>
          <div className="w-full">
            <img src={image1} alt="back logo" className="h-[30px]" />
          </div>
        </div>
        <div className="flex gap-4 text-[16px] font-medium mt-[20px] ">
          <input
            className="px-[24px] py-[12px] h-max min-w-[250px] border-[1px] rounded "
            placeholder={t("couponCode")}
          />
          <button className="px-[30px] py-[12px] h-max bg-[#DB4444] text-white rounded ">
            {t("applyCoupon")}
          </button>
        </div>
        <button className="px-[30px] py-[12px] h-max bg-[#DB4444] text-white rounded mt-[20px]">
          {t("placeOrder")}
        </button>
      </div>
    </div>
  );
};
export default PlaceOrder;

const CartItem = ({ data }) => {
  const { currency } = useContext(CurrencyChange);
  const { t } = useTranslation();

  // Format price based on currency
  const formatPrice = (price) => {
    if (currency === "PKR") return `${price * 250} PKR`;
    if (currency === "INR") return `₹${price * 86}`;
    return `$${price}`;
  };

  return (
    <div className="  flex justify-between items-center text-[16px] font-semibold mt-[20px]">
      <div className=" flex gap-2 items-center ">
        <img className="w-[54px] h-[54px]" alt={data.name} src={data.image} />
        <p className="truncate text-[16px]">{t(data.name)}</p>
      </div>
      <p className="truncate text-[16px]">
        {formatPrice(data.price * data.quantity)}
      </p>
    </div>
  );
};
