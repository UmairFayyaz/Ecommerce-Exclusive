import Wrapper from "../../component/Wrapper";
import { t } from "i18next";
import SendMessage from "./helpers/SendMessage";
import CallToUs from "./helpers/CallToUs";

const Contact = () => {
  return (
    <div className="mt-[50px]">
      <Wrapper>
        <h1 className="text-[14px] font-semibold">
          {t("home")} <span className=" mx-[10px]">/</span> {t("contact")}
        </h1>
        <div
          className="flex gap-5 w-full flex-col lg:flex-row mt-[50px]"
          dir="ltr"
        >
          <div className="w-full lg:w-[440px] flex flex-col items-center lg:items-start">
            <CallToUs />
          </div>
          <div className="w-full">
            <SendMessage />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default Contact;
