import { useNavigate } from "react-router";
import Wrapper from "../../component/Wrapper";
import { t } from "i18next";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-[50px]">
      <Wrapper>
        <h1 className="text-[14px] font-semibold">
          {t("home")} <span className=" mx-[10px]">/</span> {t("pageError")}
        </h1>
        <div className="flex flex-col items-center justify-center text-center mt-[80px]">
          <h1 className="text-[110px] font-medium">{t("notFound")}</h1>
          <p className="text-[16px] font-normal">{t("visitedPageNotFound")}</p>
          <button
            className="px-[30px] py-[12px] h-max bg-[#DB4444] text-white rounded mt-[50px]"
            onClick={() => navigate("/")}
          >
            {t("backToHomePage")}
          </button>
        </div>
      </Wrapper>
    </div>
  );
};
export default ErrorPage;
