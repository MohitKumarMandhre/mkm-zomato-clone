import React from 'react';
import "./delivery.css";
import Filters from '../common/filters/index.js';
import DeliveryCollections from './deliveryCollections';
import TopBrands from "./topBrands/index.js";
import ExploreSection from "../common/exploreSection/exploreSection.js";
import { restaurants } from "../../data/restaurants.js";

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const resList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className='max-width'> <Filters filterList={ deliveryFilters } /> </div>
      <DeliveryCollections/>
      <TopBrands/>
      <ExploreSection resList={resList} collectionName="Delivery restaurants in Banglore" />
    </div>
  )
}

export default Delivery;
