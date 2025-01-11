import Wrapper from "../../component/Wrapper";
import { t } from "i18next";
import OurStory from "./helpers/OurStory";
import CustomerService from "../Home/helpers/CustomerService";
import CustomerActive from "./helpers/CustomerActive";
import Review from "./helpers/Review";

const About = () => {
  return (
    <div className="mt-[50px]">
      <Wrapper>
        <h1 className="text-[14px] font-semibold">
          {t("home")} <span className=" mx-[10px]">/</span> {t("about")}
        </h1>
        <div>
          <OurStory />
          <CustomerActive />
          <Review />
          <div className="mt-[100px]">
            <CustomerService />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default About;
