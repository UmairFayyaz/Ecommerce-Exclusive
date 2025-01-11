import React, { lazy, Suspense, useState } from "react";
import "./App.css";
import { createContext } from "react";
import { Route, Routes } from "react-router";
import { useTranslation } from "react-i18next";
import { ConfigProvider } from "antd";
import themeConfig from "./themeConfig";
import imageArrow from "./assist/image/arrow-left.svg";
import Home from "./view/Home";

const AddToCard = lazy(() => import("./view/AddToCard"));
const Login = lazy(() => import("./view/Login"));
const Signup = lazy(() => import("./view/Signup"));
const WishList = lazy(() => import("./view/WishList"));
const BillingDetails = lazy(() => import("./view/BillingDetails"));
const MyProfile = lazy(() => import("./view/MyProfile"));
const About = lazy(() => import("./view/About"));
const Contact = lazy(() => import("./view/Contact"));
const Footer = lazy(() => import("./component/Footer"));
const CustomHeader = lazy(() => import("./component/CustomHeader"));
const Navbar = lazy(() => import("./component/Navbar"));
const ErrorPage = lazy(() => import("./view/ErrorPage"));
const ProductDetailPage = lazy(() => import("./view/ProductDetailPage"));

const CurrencyChange = createContext();
const AddToCardChange = createContext();
const WishListChange = createContext();

const App = () => {
  const [currency, setCurrency] = useState("USD");
  const [addToCard, setAddToCard] = useState([]);
  const [wishListState, setWishListState] = useState([]);
  const { t, i18n } = useTranslation();
  const scrollTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ConfigProvider theme={themeConfig}>
      <CurrencyChange.Provider value={{ currency, setCurrency }}>
        <AddToCardChange.Provider value={{ addToCard, setAddToCard }}>
          <WishListChange.Provider value={{ wishListState, setWishListState }}>
            <div
              className="relative"
              style={{ minHeight: "100vh", background: "white" }}
              dir={i18n.language === "ur" ? "rtl" : "ltr"}
            >
              <div>
                <button
                  onClick={scrollTopHandler}
                  className="bg-[#F5F5F5] p-[10px] rounded-full fixed bottom-9 right-6"
                >
                  <img
                    src={imageArrow}
                    className="rotate-90 w-[30px] "
                    alt="arrow"
                  />
                </button>
              </div>
              <CustomHeader />
              <Navbar />
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/addToCart" element={<AddToCard />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/wishList" element={<WishList />} />
                  <Route path="/checkout" element={<BillingDetails />} />
                  <Route path="/account" element={<MyProfile />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route
                    path="/productDetailPage/:id"
                    element={<ProductDetailPage />}
                  />
                  <Route path="/*" element={<ErrorPage />} />
                </Routes>
              </Suspense>
              <Footer />
            </div>
          </WishListChange.Provider>
        </AddToCardChange.Provider>
      </CurrencyChange.Provider>
    </ConfigProvider>
  );
};

export { CurrencyChange, AddToCardChange, WishListChange };
export default App;
