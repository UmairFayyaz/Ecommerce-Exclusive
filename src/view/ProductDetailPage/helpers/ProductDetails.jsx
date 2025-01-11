import { useCallback, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AddToCardChange, CurrencyChange, WishListChange } from "../../../App";
import { t } from "i18next";
import { Rate } from "antd";
import { useTranslation } from "react-i18next";
import dataForCards from "../../../assist/dataForCards/data";
import icon1 from "../../../assist/image/icon-delivery-black.svg";
import icon2 from "../../../assist/image/Icon-return.svg";

const ProjectDetails = () => {
  let { id } = useParams();
  const { addToCard, setAddToCard } = useContext(AddToCardChange);
  const { wishListState, setWishListState } = useContext(WishListChange);
  const { currency } = useContext(CurrencyChange);

  const { t } = useTranslation();

  const formatPrice = useCallback(
    (price) => {
      if (currency === "PKR") return `${price * 250} PKR`;
      if (currency === "INR") return `₹${price * 86}`;
      return `$${price}`;
    },
    [currency]
  );
  const calculateDiscountPrice = useCallback((price, discount) => {
    return discount ? price - (discount / 100) * price : price;
  }, []);

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
    if (!addToCard.find((cartItem) => cartItem.id === item.id)) {
      return;
    }
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
  const newData = dataForCards.find((item) => item.id == id);
  const navigator = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row mt-[80px] gap-3 justify-center">
      {newData?.image && (
        <div className="w-full ">
          <div className="flex flex-col lg:flex-row gap-4 ">
            <div className="flex flex-row lg:flex-col  gap-4">
              <div className="w-[170px] h-[138px] bg-[#F5F5F5] flex items-center justify-center">
                <img src={newData?.image} className="w-[121px] h-[114px]" />
              </div>
              <div className="w-[170px] h-[138px] bg-[#F5F5F5] flex items-center justify-center">
                <img src={newData?.image} className="w-[121px] h-[114px]" />
              </div>
              <div className="w-[170px] h-[138px] bg-[#F5F5F5] flex items-center justify-center">
                <img src={newData?.image} className="w-[121px] h-[114px]" />
              </div>
              <div className="w-[170px] h-[138px] bg-[#F5F5F5] flex items-center justify-center">
                <img src={newData?.image} className="w-[121px] h-[114px]" />
              </div>
            </div>
            <div className="min-w-[500px] w-[100%] max-w-[700px] h-[600px] bg-[#F5F5F5] flex items-center justify-center">
              <img src={newData?.image} className=" w-[446px] h-[315px]" />
            </div>
          </div>
        </div>
      )}

      {newData && (
        <div className="w-full lg:w-[40%] px-[20px] mt-[20px] lg:mt-0 lg:px-0 ">
          <h1 className="text-[24px] font-semibold">{newData?.name}</h1>
          <div className="flex gap-3 items-center mt-[15px] text-[14px]">
            <Rate
              allowHalf
              value={4}
              disabled={true}
              className=" !gap-2 text-[14px]"
            />
            <p className="leading-3 pb-[2px] font-semibold ">
              ({newData?.review} Reviews)
            </p>
            <div>|</div>
            <p className="text-[#00FF66]">In Stock</p>
          </div>
          <div className="flex justify-between items-center mt-[10px]">
            {newData?.price && newData?.discount ? (
              <div className="flex gap-2 text-[24px] font-medium">
                <p className="line-through">{formatPrice(newData?.price)}</p>
                <p className="text-[#DB4444]">
                  {formatPrice(
                    calculateDiscountPrice(newData?.price, newData?.discount)
                  )}
                </p>
              </div>
            ) : (
              <div className="flex gap-2 text-[16px] font-medium">
                <p className="text-[#DB4444]">{formatPrice(newData?.price)}</p>
              </div>
            )}
            <div>
              {newData?.discount > 0 && (
                <div className="  px-[8px] py-[4px] bg-[#DB4444] rounded-md text-white text-[12px] font-medium">
                  <h4>-{newData?.discount}%</h4>
                </div>
              )}
            </div>
          </div>
          <p className="text-[14px] font-normal mt-[20px]">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <hr className="mt-[15px] border-gray-light" />
          <div className="mt-[20px] flex gap-4 items-center">
            <p className="text-[20px] font-normal">Size:</p>
            <SizeItem />
          </div>
          <div className="flex gap-3 mt-[20px] ">
            <div className="flex  items-center">
              <button
                onClick={() => handleRemoveFromCart(newData)}
                className="flex items-center justify-center border-[1px]   rounded-tl rounded-bl border-r-0 border-gray-light   text-[18px] w-[30px] h-[30px] pb-[3px] font-bold"
              >
                -
              </button>
              <p className="flex items-center justify-center w-[50px] h-[30px] text-[16px] border-[1px] border-gray-light ">
                {addToCard?.find((addToCardData) => addToCardData.id == id)
                  ?.quantity || 0}
              </p>
              <button
                onClick={() => handleAddToCart(newData)}
                className="flex items-center justify-center border-[1px]  border-[#DB4444] rounded-tr rounded-br border-l-0  bg-[#DB4444] text-white text-[18px] w-[30px] h-[30px] pb-[2.5px] font-bold"
              >
                +
              </button>
            </div>
            <button
              type="button"
              className="px-[30px] py-[4px] h-max bg-[#DB4444] text-white rounded "
              onClick={() => navigator("/addToCart")}
            >
              Buy Now
            </button>
          </div>
          <div className="mt-[50px]  border-gray-light border-[1px] rounded-md">
            <div className="flex items-center gap-4 py-[25px] px-[18px]">
              <div>
                <img src={icon1} alt="Free Delivery icon" />
              </div>
              <div>
                <p className="text-[16px]">Free Delivery</p>
                <p className="text-[12px]">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-[25px] px-[18px]  border-gray-light border-t-[1px] ">
              <div>
                <img src={icon2} alt="Return Delivery icon" />
              </div>
              <div>
                <p className="text-[16px]">Return Delivery</p>
                <p className="text-[12px]">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProjectDetails;
const SizeItem = () => {
  const data = ["Xl", "S", "M", "L", "XL"];
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex gap-4 items-center">
      {data?.map((item, index) => (
        <div
          key={index}
          onClick={() => (selected == index ? "" : setSelected(index))}
          className={`border-[1px] cursor-pointer rounded  py-[3px] w-[30px] ${
            selected == index
              ? "border-[#DB4444] bg-[#DB4444] text-[white]"
              : "rgba(0, 0, 0, 0.5) text-[#000]"
          } `}
        >
          <p className="text-[14px] font-normal text-center">{item}</p>
        </div>
      ))}
    </div>
  );
};
