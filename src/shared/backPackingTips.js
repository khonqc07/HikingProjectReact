import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: "assets/images/backpacking-tips/trail-running-beginners.jpg",
    caption: "Trail Running for Beginners",
    Url: "https://www.rei.com/learn/expert-advice/trail-running-basics.html"
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