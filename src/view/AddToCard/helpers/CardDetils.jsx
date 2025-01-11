import { useContext } from "react";
import { AddToCardChange, CurrencyChange } from "../../../App";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const CardDetails = () => {
  const { addToCard, setAddToCard } = useContext(AddToCardChange);
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Handle adding items to the cart
  const handleAddToCart = (item) => {
    setAddToCard((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        // If item already exists, increment its quantity
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // Handle removing items from the cart
  const handleRemoveFromCart = (item) => {
    setAddToCard((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem?.quantity > 1) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }

      return prevCart.filter((cartItem) => cartItem.id !== item.id);
    });
  };

  return (
    <div className="mt-[50px]">
      <div>
        <div
          className="h-[70px] grid grid-cols-5 items-center text-[16px] font-semibold px-[25px]"
          style={{ boxShadow: "0px 1px 13px 0px rgba(0, 0, 0, 0.05)" }}
        >
          <p className="col-span-2">{t("product")}</p>
          <p>{t("price")}</p>
          <p>{t("quantity")}</p>
          <p>{t("subtotal")}</p>
        </div>
      </div>
      {addToCard.map((item, key) => (
        <CartItem
          key={key}
          data={item}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      ))}
      <div className="flex justify-between items-center mt-[20px]">
        <button
          onClick={() => navigate("/")}
          className="text-[16px] font-medium px-[24px] py-[12px] border-[1px] border-black rounded"
        >
          {t("returnToShop")}
        </button>
        <button
          //   onClick={() => navigate("/")}
          className="text-[16px] font-medium px-[24px] py-[12px] border-[1px] border-black rounded"
        >
          {t("updateCart")}
        </button>
      </div>
    </div>
  );
};

export default CardDetails;

const CartItem = ({ data, handleRemoveFromCart, handleAddToCart }) => {
  const { currency } = useContext(CurrencyChange);
  const { t } = useTranslation();

  // Format price based on currency
  const formatPrice = (price) => {
    if (currency === "PKR") return `${price * 250} PKR`;
    if (currency === "INR") return `₹${price * 86}`;
    return `$${price}`;
  };

  return (
    <div
      className="h-[100px] grid grid-cols-5 items-center text-[16px] font-semibold px-[25px] mt-[20px]"
      style={{ boxShadow: "0px 1px 13px 0px rgba(0, 0, 0, 0.05)" }}
    >
      <div className="col-span-2 flex gap-2 items-center ">
        <img className="w-[54px] h-[54px]" alt={data.name} src={data.image} />
        <p className="truncate text-[16px]">{t(data.name)}</p>
      </div>
      <p className="truncate text-[16px]">{formatPrice(data.price)}</p>
      <div className="flex gap-1 items-center">
        <button
          onClick={() => handleRemoveFromCart(data)}
          className="flex items-center justify-center border-[1px] border-black rounded-full text-[15px] w-[20px] h-[20px] pb-[3px] font-bold"
        >
          -
        </button>
        <p className="flex items-center justify-center w-[40px] h-[30px]  rounded-md text-[16px]">
          {data.quantity}
        </p>
        <button
          onClick={() => handleAddToCart(data)}
          className="flex items-center justify-center border-[1px] border-black rounded-full text-[15px] w-[20px] h-[20px] pb-[2.5px] font-bold"
        >
          +
        </button>
      </div>
      <p className="truncate text-[16px]">
        {formatPrice(data.price * data.quantity)}
      </p>
    </div>
  );
};
