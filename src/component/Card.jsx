import { Rate } from "antd";
import image2 from "../assist/image/Wishlist.svg";
import image1 from "../assist/image/Quick View.svg";
import image3 from "../assist/image/icon-delete.svg";
import { memo, useCallback, useContext } from "react";
import { AddToCardChange, CurrencyChange, WishListChange } from "../App";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const Card = ({
  id = 0,
  image = "",
  name = "",
  price = 0,
  discount = 0,
  rate = 0,
  review = 0,
  wishList = false,
  wishListJustForYou = false,
}) => {
  const { currency } = useContext(CurrencyChange);
  const { addToCard, setAddToCard } = useContext(AddToCardChange);
  const { wishListState, setWishListState } = useContext(WishListChange);

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

  const handleWishListToggle = (item) => {
    setWishListState((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (!existingItem) {
        return [...prevCart, { ...item }];
      } else {
        return prevCart.filter((cartItem) => cartItem.id !== item.id);
      }
    });
  };
  const navigator = useNavigate();

  return (
    <div
      className="flex-shrink-0 w-[270px] h-[350px] rounded-md overflow-hidden group"
      dir="ltr"
    >
      <div className="flex justify-center items-center w-full h-[250px] relative bg-[#F5F5F5] overflow-hidden">
        <img src={image} alt={name} />
        {discount > 0 && (
          <div className="absolute top-2 left-2 px-[12px] py-[4px] bg-[#DB4444] rounded-md text-white text-[12px] font-medium">
            <h4>-{discount}%</h4>
          </div>
        )}
        {wishList ? (
          <div className="absolute top-2 right-2 flex flex-col gap-2">
            <button
              className="bg-white p-[4px] rounded-full"
              onClick={() =>
                handleWishListToggle({
                  id,
                  image,
                  name,
                  price,
                  discount,
                  rate,
                  review,
                })
              }
            >
              <img
                src={image3}
                alt="remove from Wishlist"
                className="w-[24px] h-[24px]"
              />
            </button>
          </div>
        ) : (
          <div className="absolute top-2 right-2 flex flex-col gap-2">
            {!wishListJustForYou && (
              <button
                className={`${
                  wishListState.find((item) => item.id == id)
                    ? "bg-[#DB4444]"
                    : "bg-white"
                } p-[4px] rounded-full`}
                onClick={() =>
                  handleWishListToggle({
                    id,
                    image,
                    name,
                    price,
                    discount,
                    rate,
                    review,
                  })
                }
              >
                <img
                  src={image2}
                  alt="Add to Wishlist"
                  className="w-[24px] h-[24px]"
                />
              </button>
            )}
            <button
              className="bg-white p-[4px] rounded-full"
              onClick={() => navigator(`/productDetailPage/${id}`)}
            >
              <img
                src={image1}
                alt="Quick View"
                className="w-[24px] h-[24px]"
              />
            </button>
          </div>
        )}
        <button
          onClick={() =>
            handleAddToCart({ id, image, name, price, discount, rate, review })
          }
          className="absolute w-full h-[40px] bottom-0 left-0 transition-transform duration-200 transform text-[16px] font-medium text-white bg-black text-center translate-y-full group-hover:translate-y-0"
        >
          {t("addToCart")}
        </button>
      </div>
      <h3 className="text-[16px] font-medium mt-[10px] truncate">{t(name)}</h3>

      {price && discount ? (
        <div className="flex gap-2 text-[16px] font-medium">
          <p className="text-[#DB4444]">
            {formatPrice(calculateDiscountPrice(price, discount))}
          </p>
          <p className="line-through">{formatPrice(price)}</p>
        </div>
      ) : (
        <div className="flex gap-2 text-[16px] font-medium">
          <p className="text-[#DB4444]">{formatPrice(price)}</p>
        </div>
      )}
      {!wishList && (
        <div className="flex gap-3 items-center mt-[10px]">
          <Rate
            allowHalf
            value={rate}
            disabled={true}
            className="text-[15px] !gap-2"
          />
          <p className="leading-4 font-semibold">({review})</p>
        </div>
      )}
    </div>
  );
};

Card.defaultProps = {
  id: 0,
  image: "",
  name: "",
  price: 0,
  discount: 0,
  rate: 0,
  review: 0,
  wishList: false,
  wishListJustForYou: false,
};
export default memo(Card);
