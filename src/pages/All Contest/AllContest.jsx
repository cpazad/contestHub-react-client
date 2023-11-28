import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ContestCard2 from "../../components/Partials/Contest/ContestCard2";
import useContest from "../../Hooks/useContest";


const AllContest = () => {
  const categories = ["business contest", "medical", "writing", "gaming"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
 const [contest]= useContest()
 const business = contest.filter((item) => item.category === "business contest");
 const medical = contest.filter((item) => item.category === "medical contest");
 const writing = contest.filter((item) => item.category === "writing contest");
 const gaming = contest.filter((item) => item.category === "gaming contest");
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
            <Tab> Writing Contest  </Tab>
            <Tab> Gaming Contest </Tab>
          </TabList>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:py-5 ">
              {
                business.map(item => <ContestCard2 key={item._id} item={item}></ContestCard2> )
              }
            
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:py-5 ">
              {
                medical.map(item => <ContestCard2 key={item._id} item={item}></ContestCard2> )
              }
            
            </div>
          </TabPanel>
          <TabPanel>
            {" "}
            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4 sm:py-5">
            {
                writing.map(item => <ContestCard2 key={item._id} item={item}></ContestCard2> )
              }
            </div>{" "}
          </TabPanel>
          <TabPanel>
            {" "}
            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4 sm:py-5">
            {
                gaming.map(item => <ContestCard2 key={item._id} item={item}></ContestCard2> )
              }
            </div>{" "}
          </TabPanel>
          
        </Tabs>
      </div>
    </div>
  );
};

export default AllContest;
