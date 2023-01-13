import React from 'react';
import './RestaurantList.scss';

import { imgPath } from '../../config';

const RestaurantList = ({ restaurant }) => {
  const {
    id,
    name,
    cloudinaryImageId,
    cuisines,
    costForTwoString,
    deliveryTime,
    avgRating,
  } = restaurant;
  return (
    <div className="restaurant">
      <img src={imgPath + cloudinaryImageId} alt="" />
      <h3 className="title">{name}</h3>
      <div className="cuisines">{cuisines.join(', ')}</div>
      <ul>
        <li className="rating">{avgRating}</li>
        <li>{deliveryTime} MINS</li>
        <li>{costForTwoString}</li>
      </ul>
    </div>
  );
};

export default RestaurantList;
