import { Helmet } from "react-helmet-async";
import SearchBanner from "../../components/Partials/Banners/SearchBanner";
import About from "./HomeSections/About";
import PopularContests from "./HomeSections/PopularContests";
import ContestCategory from "./HomeSections/ContestCategory";
import Advertisement from "./HomeSections/Advertisement";
import BestCreators from "./HomeSections/BestCreators";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> ContestHub | Home </title>
      </Helmet>
      <div>
        <SearchBanner></SearchBanner>
        <About></About>
        <ContestCategory></ContestCategory>
        <PopularContests></PopularContests>
        <Advertisement></Advertisement>
        <BestCreators></BestCreators>
      </div>
    </div>
  );
};

export default Home;
