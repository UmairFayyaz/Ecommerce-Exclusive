import icon from "../assist/image/emailicon.svg";
import image1 from "../assist/image/Qrcode.svg";
import image2 from "../assist/image/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.svg";
import image3 from "../assist/image/download-appstore.svg";
import icons1 from "../assist/image/Icon-Facebook.svg";
import icons2 from "../assist/image/Icon-Twitter.svg";
import icons3 from "../assist/image/icon-instagram.svg";
import icons4 from "../assist/image/Icon-Linkedin.svg";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col items-center w-full  bg-[#000000] mt-[70px] pt-[50px]  ">
      <div
        className={`flex flex-col text-center  ${
          i18n.language === "ur" ? "lg:text-right" : "lg:text-left"
        } lg:flex-row justify-between w-full   py-[30px] gap-6 lg:gap-2 max-w-[1300px] text-white font-normal `}
      >
        <div>
          <h1 className="text-[24px] font-bold text-center lg:text-left">
            Exclusive
          </h1>
          <h2 className="text-[20px] mt-[20px]">{t("subscribe")}</h2>
          <p className="text-[16px] mt-[16px]">{t("getoffyourfirstorder")}</p>
          <div className="flex justify-center lg:justify-start">
            <div className="flex gap-2 border-[1px] border-white rounded items-center bg-transparent px-[10px] py-[6px] mt-[16px] max-w-[300px]  ">
              <input
                placeholder={t("enterYourEmail")}
                className="bg-transparent outline-none text-[16px]"
              />
              <img
                src={icon}
                alt="Submit Email"
                className={`${
                  i18n.language === "ur" ? "rotate-180" : "rotate-0"
                } `}
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-[20px] font-medium">{t("support")}</h2>
          <p className="text-[16px]  mt-[20px] text-center lg:text-left">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-[16px] mt-[16px] text-center lg:text-left">
            exclusive@gmail.com
          </p>
          <p className="text-[16px] mt-[16px] text-center lg:text-left">
            +88015-88888-9999
          </p>
        </div>
        <div>
          <h2 className="text-[20px] font-medium">{t("account")}</h2>
          <ul className="flex flex-col gap-4  mt-[20px]">
            <li className="cursor-pointer">
              <Link to="/account">{t("myAccount")}</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/signup">{t("loginRegister")}</Link>{" "}
            </li>
            <li className="cursor-pointer">
              <Link to="/addToCart">{t("cart")}</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/wishList">{t("wishlist")}</Link>
            </li>
            <li className="cursor-pointer">
              <Link>{t("shop")}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-[20px] font-medium">{t("quickLink")}</h2>
          <ul className="flex flex-col gap-4  mt-[20px]">
            <li className="cursor-pointer">
              <Link>{t("privacyPolicy")}</Link>
            </li>
            <li className="cursor-pointer">
              <Link>{t("termsOfUse")}</Link>{" "}
            </li>
            <li className="cursor-pointer">
              <Link>{t("fAQ")}</Link>
            </li>
            <li className="cursor-pointer">
              <Link>{t("viewAllProducts")}</Link>
            </li>
          </ul>
        </div>
        <div dir="ltr">
          <h2 className="text-[20px] font-medium text-center lg:text-left">
            Download App
          </h2>
          <p className="text-[16px]  mt-[20px] text-white-light text-center lg:text-left">
            Save $3 with App New User Only
          </p>
          <div className="flex flex-col lg:items-start items-center">
            <div className="flex mt-[10px] gap-3 items-center">
              <div>
                <img
                  src={image1}
                  alt="Qr code"
                  className="w-[100px] h-[100px]"
                />
              </div>
              <div>
                <img
                  src={image2}
                  alt="download on the play store"
                  className="w-[120px] h-[50px]"
                />
                <img
                  src={image3}
                  alt="download on the app store "
                  className="w-[120px] h-[50px]"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-[20px]">
              <img
                src={icons1}
                alt="facebook icon"
                className="w-[24px] h-[24px]"
              />
              <img
                src={icons2}
                alt="Twitter icon"
                className="w-[24px] h-[24px]"
              />
              <img
                src={icons3}
                alt="instagram icon"
                className="w-[24px] h-[24px]"
              />
              <img
                src={icons4}
                alt="Linkedin icon"
                className="w-[24px] h-[24px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center border-gray-white text-gray-white border-t-[1px] text-center w-full py-[20px] mt-[20px] items-center gap-2 ">
        <p className="text-[30px]">&copy;</p>
        <p className=" font-normal text-[16px]">
          Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </div>
  );
};
export default Footer;
