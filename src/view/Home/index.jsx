import Categories from "./helpers/Categories";
import CustomerService from "./helpers/CustomerService";
import EnhanceYourMusicExperience from "./helpers/EnhanceYourMusicExperience";
import Featured from "./helpers/Featured";

import OurProducts from "./helpers/OurProducts";
import SidebarsAndContent from "./helpers/SidebarsAndContent";
import ThisMonth from "./helpers/ThisMonth";
import Todays from "./helpers/Todays";

const Home = () => {
  return (
    <>
      <SidebarsAndContent />
      <Todays />
      <Categories />
      <ThisMonth />
      <EnhanceYourMusicExperience />
      <OurProducts />
      <Featured />
      <CustomerService />
    </>
  );
};
export default Home;
