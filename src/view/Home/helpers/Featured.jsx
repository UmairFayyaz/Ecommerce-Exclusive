import CategoriesHeading from "../../../component/CategoriesHeading";
import Wrapper from "../../../component/Wrapper";
import image1 from "../../../assist/image/Frame 684.png";
import image2 from "../../../assist/image/Frame 685.png";
import image3 from "../../../assist/image/Frame 686.png";
import image4 from "../../../assist/image/Frame 687.png";
import { useTranslation } from "react-i18next";

const Featured = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-[70px] ">
      <Wrapper>
        <div>
          <CategoriesHeading title={t("featured")} />
          <div className=" w-full  mt-[10px]">
            <h3 className="text-[36px] font-semibold w-full ">
              {t("newArrival")}
            </h3>
          </div>
          <div className="w-full flex  justify-center overflow-hidden mt-[20px]">
            <div className="flex max-w-[1170px] w-full gap-2 flex-col lg:flex-row">
              <div className=" h-max lg:h-[600px] w-[100%]">
                <img src={image1} />
              </div>
              <div className="w-full h-full flex flex-col gap-3 ">
                <div className="h-max w-full">
                  <img src={image2} className="w-full" />
                </div>
                <div className="h-full w-full flex gap-3 flex-col lg:flex-row">
                  <div className="h-full w-full">
                    <img src={image3} className="w-full" />
                  </div>
                  <div className="h-full w-full">
                    <img src={image4} className="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default Featured;
