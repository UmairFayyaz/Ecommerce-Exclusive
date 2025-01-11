import { useContext, useMemo } from "react";
import Card from "../../../component/Card";
import { WishListChange } from "../../../App";
import { t } from "i18next";

const WishListCardsComponent = () => {
  const { wishListState } = useContext(WishListChange);
  const hiddenComponents = useMemo(() => {
    return Array(
      wishListState?.length > 0
        ? wishListState?.length > 4
          ? wishListState?.length % 4
          : 4 - wishListState?.length
        : 0
    )
      .fill(null)
      .map((_, index) => (
        <div key={index} className="invisible w-[270px]">
          Hidden Component {index + 1}
        </div>
      ));
  }, [wishListState?.length]);

  return (
    <div>
      <div className=" w-full flex justify-between items-center">
        <h3 className="text-[20px] font-semibold w-full ">
          {t("wishlist")} ({wishListState?.length})
        </h3>
        <button className="px-[30px] py-[12px] h-max  rounded  mt-[20px] border-[1px] border-[rgba(0, 0, 0, 0.4)] font-semibold whitespace-nowrap  ">
          {t("moveAllToBag")}
        </button>
      </div>
      <div className="flex gap-5 mt-[30px] flex-col md:flex-row w-full flex-wrap justify-center items-center">
        {wishListState?.map((item, index) => (
          <Card {...item} wishList={true} key={index} />
        ))}
        {hiddenComponents}
      </div>
    </div>
  );
};
export default WishListCardsComponent;
