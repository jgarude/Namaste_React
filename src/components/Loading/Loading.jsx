import React from 'react';
import './Loading.scss';

const shimmerCard = () => {
  return (
    <div class="card_shimmer">
      <div class="shimmerBG media"></div>
      <div class="p-32">
        <div class="shimmerBG title-line"></div>
        <div class="shimmerBG title-line end"></div>
      </div>
    </div>
  );
};

const Loading = () => {
  return (
    <div className="shimmer-container">
      {Array(10)
        .fill('')
        .map((e, index) => shimmerCard())}
    </div>
  );
};

export default Loading;
