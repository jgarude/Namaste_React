import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

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
    fetchRestraurant();
  }, []);

  const fetchRestraurant = async () => {
    const response = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.895737808118996&lng=77.65676497804067&page_type=DESKTOP_WEB_LISTING'
    );
    const data = await response.json();
    setRestaurantList(data?.data?.cards[2]?.data?.data?.cards);
    console.log('>>>>> data', data?.data?.cards[2]?.data?.data?.cards);
  };

  console.log('>>>>>>> render');

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
        {(restaurantList.length > 0 &&
          findRestrarants(restaurantList).map((item) => {
            return (
              <Link to={`restaurant/${item.data.id}`}>
                <RestaurantList restaurant={item.data} key={item.data.id} />
              </Link>
            );
          })) || <Loading />}
      </div>
    </div>
  );
};

export default Body;
