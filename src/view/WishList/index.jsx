import CategoriesHeading from "../../component/CategoriesHeading";
import Wrapper from "../../component/Wrapper";
import JustForYou from "./helpers/JustForYou";
import WishListCardsComponent from "./helpers/WishListCardsComponent";

const WishList = () => {
  return (
    <div className="mt-[70px] ">
      <Wrapper>
        <WishListCardsComponent />
        <JustForYou />
      </Wrapper>
    </div>
  );
};
export default WishList;
