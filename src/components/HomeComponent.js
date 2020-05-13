import React from 'react';
import { Card, CardImg, CardImgOverlay, CardHeader, CardBody, CardTitle } from 'reactstrap';
import BackPackingTips from '../shared/backPackingTips';
import WanderLust from '../shared/wanderLust';

function RenderCard({item}){
    return(
        <Card>
            <CardImg className="featured-trail" src={item.image} alt={item.name} />
            <CardImgOverlay className="p-0">
                <CardHeader className="featured-trail-header">{item.level}</CardHeader>
            </CardImgOverlay>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <span>{item.distance} ~ {item.elevation} Ascent</span>
            </CardBody>
        </Card>
    )
}

function Home(props) {
    return(
        <div className="container-fluid mt-3">
            <h2 className="text-center">Featured Trails</h2>
            <div className="row justify-content-center">
                <div className="col-md-3 m-1">
                    <RenderCard item={props.easy} />
                </div>
                <div className="col-md-3 m-1">
                    <RenderCard item={props.moderate} />
                </div>
                <div className="col-md-3 m-1">
                    <RenderCard item={props.hard} />
                </div>         
            </div>
            <div className="row mt-4 justify-content-center">
                <div>
                    <h2>Backpacking Tips</h2>
                    <BackPackingTips />
                </div>
                <div className="mt-3">
                    <h2>The Wanderlust Story</h2>
                    <WanderLust />
                </div>
            </div>
        </div>  
    );
}

export default Home;

