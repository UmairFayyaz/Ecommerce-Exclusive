import { t } from "i18next";
import Wrapper from "../../component/Wrapper";
import SidebarsForMyProfile from "./helpers/SideBarforForMyProfile";
import EditProfile from "./helpers/EditPlofile";

const MyProfile = () => {
  return (
    <div className="mt-[50px]">
      <Wrapper>
        <>
          <div className="flex justify-between items-center">
            <h1 className="text-[14px] font-semibold">
              {t("account")}
              <span className=" mx-[10px]">/</span> {t("myAccount")}
            </h1>
            <h2 className="text-[14px]">
              {t("welcome")} <span className="text-[#DB4444]">Md Rimel</span>
            </h2>
          </div>

          <div className="flex gap-5 w-full flex-col lg:flex-row mt-[50px]">
            <div className="w-full lg:w-[400px] flex flex-col items-center lg:items-start">
              <SidebarsForMyProfile />
            </div>
            <div className="w-full">
              <EditProfile />
            </div>
          </div>
        </>
      </Wrapper>
    </div>
  );
};
export default MyProfile;
