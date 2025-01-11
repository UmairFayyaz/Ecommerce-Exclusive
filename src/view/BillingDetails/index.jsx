import Wrapper from "../../component/Wrapper";
import { t } from "i18next";
import CustomerDetails from "./helpers/CustomerDetails";
import PlaceOrder from "./helpers/PlaceOrder";
import { Form } from "antd";

const BillingDetails = () => {
  return (
    <div className="mt-[50px]">
      <Wrapper>
        <>
          <h1 className="text-[14px] font-semibold">
            {t("account")}
            <span className=" mx-[10px]">/</span> {t("myAccount")}
            <span className=" mx-[10px]">/</span>
            {t("product")}
            <span className=" mx-[10px]">/</span>
            {t("viewCart")}
            <span className=" mx-[10px]">/</span>
            {t("checkOut")}
          </h1>
          <Form name="basic" layout="vertical" autoComplete="off">
            <div className="flex gap-3 w-full flex-col lg:flex-row mt-[50px]">
              <div className="w-full">
                <CustomerDetails />
              </div>
              <div className="w-full">
                <PlaceOrder />
              </div>
            </div>
          </Form>
        </>
      </Wrapper>
    </div>
  );
};
export default BillingDetails;
