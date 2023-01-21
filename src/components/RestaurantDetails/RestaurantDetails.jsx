import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './RestaurantDetails.scss';

const RestaurantDetails = () => {
  const { id = '' } = useParams();
  const [details, setDetails] = useState();
  const [menu, setMenu] = useState();
  const getRestaurantDetails = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.895737808118996&lng=77.65676497804067&restaurantId=${id}&submitAction=ENTER`
    );

    const data = await response.json();
    console.log(data?.data);
    setDetails(data?.data?.cards[0]?.card?.card?.info);
    setMenu(
      data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  };

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  return (
    <div className="restaurant-details">
      {details ? (
        <>
          <div className="info">
            <div className="left">
              <h3>{details?.name}</h3>
              <p className="cuisine">{details.cuisines.join(',')}</p>
              <div className="distance">{details.areaName}</div>
            </div>
            <div className="right">
              <div className="ratings">{details.avgRating}</div>
            </div>
          </div>
          <div className="menu">
            <h3>Menu</h3>
            {menu &&
              menu.map((item) => {
                const { name, defaultPrice, price, description, imageId } =
                  item?.card?.info;
                return (
                  <div className="row">
                    <div className="left">
                      <h4>{name}</h4>
                      <h6>₹ {defaultPrice / 100 || price / 100} </h6>
                      <p>{description}</p>
                    </div>
                    <div className="right">
                      <img
                        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`}
                        alt={name}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        <div>loading.....</div>
      )}
    </div>
  );
};

export default RestaurantDetails;
