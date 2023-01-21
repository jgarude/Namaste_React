import React from 'react';
import './Loading.scss';

const shimmerCard = (index) => {
  return (
    <div className="card_shimmer" key={index}>
      <div className="shimmerBG media"></div>
      <div className="p-32">
        <div className="shimmerBG title-line"></div>
        <div className="shimmerBG title-line end"></div>
      </div>
    </div>
  );
};

const Loading = () => {
  return (
    <div className="shimmer-container">
      {Array(9)
        .fill('')
        .map((e, index) => shimmerCard(index))}
    </div>
  );
};

export default Loading;
