import { t } from "i18next";
import imageCart from "../assist/image/Cart.svg";
import imageSearch from "../assist/image/Search.svg";
import imageWishlist from "../assist/image/Wishlist.svg";
import imageUser from "../assist/image/user.svg";
import { Link, useLocation, useNavigate } from "react-router";
import { useContext } from "react";
import { AddToCardChange, WishListChange } from "../App";
import { Dropdown } from "antd";
import icons1 from "../assist/image/icon-user.svg";
import icons2 from "../assist/image/Icon-logout.svg";
import icons3 from "../assist/image/Icon-Reviews.svg";
import icons4 from "../assist/image/icon-cancel.svg";
import icons5 from "../assist/image/icon-mallbag.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const { addToCard } = useContext(AddToCardChange);
  const { wishListState } = useContext(WishListChange);
  const location = useLocation();
  const dropdownData = [
    {
      title: "Manage My Account",
      image: icons1,
    },
    {
      title: "My Order",
      image: icons2,
    },
    {
      title: "My Cancellations",
      image: icons3,
    },
    {
      title: "My Reviews",
      image: icons4,
    },
    {
      title: "Logout",
      image: icons5,
    },
  ];
  return (
    <>
      <div className="flex justify-center w-full px-[20px] mt-[20px] border-b-[.5px] border-gray-light pb-[10px]">
        <div className="flex flex-col md:flex-row justify-between w-full items-center  py-[10px] gap-6 max-w-[1300px]">
          <h1 className="text-[24px] font-bold">Exclusive</h1>
          <ul
            className="flex  justify-center text-[16px] font-medium"
            style={{ gap: "40px" }}
          >
            <li
              className={`border-b-[2px]  hover:border-black py-[5px] ${
                location.pathname == "/"
                  ? "border-black "
                  : "border-transparent"
              }`}
            >
              <Link to="/">{t("home")}</Link>
            </li>
            <li
              className={`border-b-[2px]  hover:border-black py-[5px] ${
                location.pathname == "/contact"
                  ? "border-black "
                  : "border-transparent"
              }`}
            >
              <Link to="/contact">{t("contact")}</Link>
            </li>
            <li
              className={`border-b-[2px]  hover:border-black py-[5px] ${
                location.pathname == "/about"
                  ? "border-black "
                  : "border-transparent"
              }`}
            >
              <Link to="/about">{t("about")}</Link>
            </li>
            <li
              className={`border-b-[2px]  hover:border-black py-[5px] ${
                location.pathname == "/signup"
                  ? "border-black "
                  : "border-transparent"
              }`}
            >
              <Link to="/signup">{t("signUp")}</Link>
            </li>
          </ul>
          <div className="flex items-center gap-1">
            <div className="flex gap-1 px-[12px] py-[6px] bg-[#F5F5F5] rounded-md">
              <input
                className="border-0 bg-transparent !outline-none shadow-none text-[12px]"
                placeholder={t("searchPlaceholder")}
              />

              <img
                className="w-[24px] h-[24px]"
                src={imageSearch}
                alt="search"
              />
            </div>
            <button onClick={() => navigate("/wishList")} className="relative">
              {wishListState?.length > 0 && (
                <div className="absolute top-0 right-0 flex items-center justify-center w-[15px] h-[15px] rounded-full bg-[#DB4444] text-white text-[10px]">
                  {wishListState?.length}
                </div>
              )}
              <img
                className="w-[32px] h-[32px]"
                src={imageWishlist}
                alt="wish list"
              />
            </button>

            <button onClick={() => navigate("/addToCart")} className="relative">
              {addToCard?.length > 0 && (
                <div className="absolute top-0 right-0 flex items-center justify-center w-[15px] h-[15px] rounded-full bg-[#DB4444] text-white text-[10px]">
                  {addToCard?.length}
                </div>
              )}
              <img className="w-[32px] h-[32px]" src={imageCart} alt="cart" />
            </button>
            <Dropdown
              trigger="click"
              placement="bottomRight"
              dropdownRender={(menu) => (
                <div
                  className=" flex flex-col gap-2 px-[15px]  rounded-md py-[10px]"
                  style={{
                    background:
                      " linear-gradient(45deg, rgba(217, 96, 234, 0.7) 8%, rgba(0, 0, 0, 0.7) 50%)",
                  }}
                >
                  {dropdownData?.map((item, index) => (
                    <div
                      className="flex gap-2 items-center pl-[8px] pr-[12px] py-[5px] hover:bg-white-light text-[14px] text-white rounded-md"
                      key={index}
                    >
                      <img src={item.image} className="w-[25px] h-[25px]" />
                      <p>{item.title}</p>
                    </div>
                  ))}
                </div>
              )}
            >
              <button className="relative">
                <img className="w-[32px] h-[32px]" src={imageUser} alt="cart" />
              </button>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
