import { t } from "i18next";
import image1 from "../../../assist/image/review1.png";
import image2 from "../../../assist/image/review2.png";
import image3 from "../../../assist/image/review3.png";
import reviewIcon from "../../../assist/image/reviewIcon.svg";

const Review = () => {
  const data = [
    {
      image: image1,
      title: "Tom Cruise",
      value: "Founder & Chairman",
    },
    {
      image: image2,
      title: "Emma Watson",
      value: "Managing Director",
    },
    {
      image: image3,
      title: "Will Smith",
      value: "Product Designer",
    },
  ];
  return (
    <div className="mt-[70px] flex justify-center w-full " dir="ltr">
      <div className="flex gap-5 mt-[20px] flex-col md:flex-row  flex-wrap justify-center w-full">
        {data.map((item, index) => (
          <CardList data={item} key={index} />
        ))}
      </div>
    </div>
  );
};
export default Review;
const CardList = ({ data }) => {
  return (
    <div className={`min-w-[170px] w-[370px]`}>
      <div className={` h-[430px] `}>
        <img src={data.image} alt="review images" />{" "}
      </div>
      <h1 className=" font-medium mt-[10px] text-[32px]">{data.value}</h1>
      <p className="text-[16px] font-normal">{t(data.title)}</p>
      <img src={reviewIcon} alt="review Icon" className="mt-[10px]" />{" "}
    </div>
  );
};
