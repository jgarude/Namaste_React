import React from 'react';
import { useParams } from 'react-router-dom';
const RestaurantDetails = () => {
  const params = useParams();
  console.log('>>>> params', params.id);
  return <div>RestaurantDetails</div>;
};

export default RestaurantDetails;
