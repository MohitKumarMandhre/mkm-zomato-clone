import React, { useState } from 'react';
import Header from "../../components/common/header/index.js";
import Footer from "../../components/common/footer/index.js";
import TabOptions from "../../components/common/tabOptions/index.js";
import Delivery from "..//../components/delivery/delivery.js";
import DiningOut from "../../components/diningOut/diningOut.js";
import NightLife from "../../components/nightLife/nightLife.js";


const Home = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
        <Header/>
        <TabOptions activeTab={ activeTab } setActiveTab= { setActiveTab } />
        {getCorrectScreen(activeTab)}
        <Footer/>
    </div>
  )
}

const getCorrectScreen = ( tab ) => {
  switch(tab){
    case "Delivery" : 
      return <Delivery />
    case "Dining Out":
      return <DiningOut />
    case "Nightlife":
      return <NightLife/>
    default:
      return <Delivery />
  }
};

export default Home