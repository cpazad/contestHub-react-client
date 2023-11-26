import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import ContestCard2 from "../../components/Partials/Contest/ContestCard2";
import PopularContests from "./PopularContests";

const AllContest = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  return (
    <div>
      {" "}
      <Helmet>
        <title> ContestHub | All Contests </title>
      </Helmet>{" "}
      <div className="pt-5 pb-20 px-20">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab> Business Contest  </Tab>
            <Tab> Medical Contest  </Tab>
            <Tab> Article Writing  </Tab>
            <Tab> Gaming Contest </Tab>
          </TabList>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:py-5 ">
              {/* {
                salad.map(item => <FoodCard key={item.id} item={item}></FoodCard>)
              } */}
              <ContestCard2></ContestCard2>
              <ContestCard2></ContestCard2>
              <ContestCard2></ContestCard2>
              <ContestCard2></ContestCard2>
            </div>
          </TabPanel>
          <TabPanel>
            {" "}
            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4 sm:py-5">
              {/* {
                pizza.map(item => <FoodCard key={item.id} item={item}></FoodCard>)
              } */}
              <ContestCard2></ContestCard2>
              <ContestCard2></ContestCard2>
              <ContestCard2></ContestCard2>
              <ContestCard2></ContestCard2>
            </div>{" "}
          </TabPanel>
          <TabPanel>
            {" "}
            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4 sm:py-5">
              {/* {
                soup.map(item => <FoodCard key={item.id} item={item}></FoodCard>)
              } */}
              <ContestCard2></ContestCard2>
              <ContestCard2></ContestCard2>
              <ContestCard2></ContestCard2>
              <ContestCard2></ContestCard2>
            </div>{" "}
          </TabPanel>
          <TabPanel>
            {" "}
            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4 sm:py-5">
              {/* {
                desserts.map(item => <FoodCard key={item.id} item={item}></FoodCard>)
              } */}
               <ContestCard2></ContestCard2>
              <ContestCard2></ContestCard2>
              <ContestCard2></ContestCard2>
              <ContestCard2></ContestCard2>
            </div>{" "}
          </TabPanel>
          
        </Tabs>
      </div>
    </div>
  );
};

export default AllContest;
