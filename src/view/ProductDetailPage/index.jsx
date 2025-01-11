import { useNavigate, useParams } from "react-router";
import Wrapper from "../../component/Wrapper";
import { t } from "i18next";
import RelatedItem from "./helpers/RelatedItem";
import ProjectDetails from "./helpers/ProductDetails";
import dataForCards from "../../assist/dataForCards/data";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const newData = dataForCards.find((item) => item.id == id);
  return (
    <div className="mt-[50px]">
      <Wrapper>
        <h1 className="text-[14px] font-semibold">
          {t("home")} <span className=" mx-[10px]">/</span> {newData.name}
        </h1>
        <div dir="ltr">
          <ProjectDetails />
          <RelatedItem />
        </div>
      </Wrapper>
    </div>
  );
};
export default ProductDetailPage;
