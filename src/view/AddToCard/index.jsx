import { useContext } from "react";
import { AddToCardChange } from "../../App";
import CardDetils from "./helpers/CardDetils";
import Wrapper from "../../component/Wrapper";
import { t } from "i18next";
import CheckOut from "./helpers/CheckOut";

const AddToCard = () => {
  return (
    <div className="mt-[50px]">
      <Wrapper>
        <h1 className="text-[14px] font-semibold">
          {t("home")} <span className=" mx-[10px]">/</span> {t("card")}
        </h1>
        <CardDetils />
        <CheckOut />
      </Wrapper>
    </div>
  );
};
export default AddToCard;
