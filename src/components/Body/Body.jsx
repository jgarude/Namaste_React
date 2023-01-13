import React, { useState, useEffect } from 'react';
import { data } from '../../config';
import RestaurantList from '../RestaurantList/RestaurantList';
import './Body.scss';

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [query, setQuery] = useState('');

  const findRestrarants = (restaurantList) => {
    const results = restaurantList.filter((restaurant) =>
      restaurant.data.slugs.restaurant.includes(query)
    );
    console.log('>>>>>> restaurantList 1211212', results);
    return results;
  };

  useEffect(() => {
    setRestaurantList(data);
  }, []);

  return (
    <div className="body-container">
      <div className="search">
        <input
          type="search"
          className="search-bar"
          placeholder="Search for food/restaurant"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="restaurant-list">
        {console.log('>>>>> restaurantList1', restaurantList)}
        {findRestrarants(restaurantList).map((item) => {
          return <RestaurantList restaurant={item.data} key={item.data.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
