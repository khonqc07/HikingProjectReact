import React from 'react';
import { Breadcrumb, BreadcrumbItem, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Zoom } from 'react-slideshow-image';

const images = [
    '/assets/images/adventure/four-ice-cave.jpg',
    '/assets/images/adventure/annette-lake.jpg',
    '/assets/images/adventure/mt-fremont.jpg',
    '/assets/images/adventure/snow-lake.jpg',
    '/assets/images/adventure/tolmie-peak.jpg'
  ];
  
  const zoomOutProperties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
  }
  
  const Slideshow = () => {
      return (
        <Zoom {...zoomOutProperties}>
          {
            images.map((each, index) => <CardImg key={index} style={{width: "50vw", height: '60vh', objectFit: 'cover'}} src={each} />)
          }
        </Zoom>
      )
  }

function About() {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div>
                <p>
                    Washington is full of amazing trails of which you can explore in different seasons. I started to hike about 5 years ago 
                    and it has then become one of my favorite activities during Summer time. I highly recommend that you check out the trails 
                    listed on here whenever possible. Some of them are super friendly for first-timers and definitely worth a try.
                </p>
                <p>
                    P.S. This website is simply made out of my personal interest. I wish I could have spent more time to improve the UI design 
                    as well as create addtional features. I'll continue to update it as I learn more though. 
                </p>                
                <br />                                 
            </div>
            <div className="slide-container">
                <Slideshow />
            </div>                       
        </div>
    )
};
           
export default About;