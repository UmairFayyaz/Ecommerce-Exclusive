import iconsEmail from "../../../assist/image/icons-mail.svg";
import iconsPhone from "../../../assist/image/icons-phone.svg";

const CallToUs = () => {
  const data = [
    {
      image: iconsEmail,
      title: "Call To Us",
      para: ["We are available 24/7, 7 days a week.", "Phone: +8801611112222"],
    },
    {
      image: iconsPhone,
      title: "Write To US",
      para: [
        "Fill out our form and we will contact you within 24 hours.",
        "Emails: customer@exclusive.com",
        "Emails: support@exclusive.com",
      ],
    },
  ];
  return (
    <div
      className=" py-[40px] px-[40px] rounded-lg w-full"
      style={{ boxShadow: "0px 1px 13px 0 rgba(0, 0, 0, 0.05)" }}
    >
      {data?.map((item, index) => (
        <CardList data={item} index={index} key={index} />
      ))}
    </div>
  );
};
export default CallToUs;
const CardList = ({ data, index }) => {
  return (
    <div className={`mb-[20px] ${index > 0 && "border-t-[1px] pt-[20px]"}`}>
      <div className="flex items-center gap-3">
        <img src={data.image} alt={data.title} />
        <h1 className="text-[16px] font-medium">{data.title}</h1>
      </div>
      {data.para?.map((item, index) => (
        <p className="text-[14px] font-normal mt-[16px]" key={index}>
          {item}
        </p>
      ))}
    </div>
  );
};
