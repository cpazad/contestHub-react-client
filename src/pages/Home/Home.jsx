import { Helmet } from "react-helmet-async";
import SearchBanner from "../../components/Partials/Banners/SearchBanner";
import About from "./About/About";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> ContestHub | Home </title>
      </Helmet>
      <div>
        <SearchBanner></SearchBanner>
        <About></About>
      </div>
    </div>
  );
};

export default Home;
