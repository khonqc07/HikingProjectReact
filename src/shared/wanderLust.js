import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: "assets/images/wanderlust/hiking-saddle-rock.jpg",
    altText: "Hiking to Saddle Rock",
    caption: "Hiking to Saddle Rock"
  },
  {
    src: "assets/images/wanderlust/hiking-umatilla-rock-trail.jfif",
    altText: "Hiking Umatilla Rock Trail",
    caption: "Hiking Umatilla Rock Trail"
  },
  {
    src: "assets/images/wanderlust/millard-cabin-packwood.jpg",
    altText: "A Night at Millar's Cabin Packwood, WA",
    caption: "A Night at Millar's Cabin Packwood, WA"
  }
];

const WanderLust = () => (
  <div>
    <UncontrolledCarousel items={items} />
  </div>
);

export default WanderLust;