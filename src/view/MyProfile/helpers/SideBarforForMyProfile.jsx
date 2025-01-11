import { t } from "i18next";

const SidebarsForMyProfile = () => {
  const data = [
    {
      title: t("Manage My Account"),
      subtitle: [t("My Profile"), t("Address Book"), t("My Payment Options")],
    },
    {
      title: t("My Orders"),
      subtitle: [t("My Returns"), t("My Cancellations")],
    },
    { title: t("My WishList") },
  ];
  return (
    <ul className="text-[16px] font-normal">
      {data.map((item, index) => (
        <li key={index} className="mb-2 ">
          <div className="flex justify-between items-center cursor-pointer font-medium">
            <span>{item.title}</span>
          </div>

          {item.subtitle && (
            <ul className="pl-6 mt-2 transition-transform duration-200 transform ">
              {item.subtitle.map((subItem, subIndex) => (
                <li
                  key={subIndex}
                  className={`py-1 ${
                    index == 0 && subIndex == 0
                      ? "text-[#DB4444]"
                      : "text-black"
                  }`}
                >
                  {subItem}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
export default SidebarsForMyProfile;
