import React from 'react';
import "./exploreSection.css";
import ExploreCard from "./exploreCard/exploreCard.js";

const ExploreSection = ({ resList, collectionName}) => {
  return (
    <div className='max-width explore-section'>
        <div className='collection-title'>{collectionName}</div>
        <div className='explore-grid'>
            {resList.map( (restaurant, i) => (
                <ExploreCard restaurant={ restaurant }  i={i} />
            ) )}
        </div>
    </div>
  )
}

export default ExploreSection;