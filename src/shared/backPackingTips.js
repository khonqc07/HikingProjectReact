import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: "assets/images/backpacking-tips/trail-running-beginners.jpg",
    caption: "Trail Running for Beginners"
  },
  {
    src: "assets/images/backpacking-tips/hiking-in-the-rain.jpg",
    caption: "Hiking in the Rain"
  },
  {
    src: "assets/images/backpacking-tips/sustainable-gear.jpg",
    caption: "How to Choose Sustainable Clothing and Gear"
  }
]; 

const BackPackingTips = () => (
  <div>
    <UncontrolledCarousel items={items} />
  </div>
);

export default BackPackingTips;