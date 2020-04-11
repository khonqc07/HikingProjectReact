import React from 'react';
import { Card, CardImg, CardFooter, CardBody, CardTitle } from 'reactstrap';
import BackPackingTips from '../shared/backPackingTips';
import WanderLust from '../shared/wanderLust';

function RenderCard({item}){
    return(
        <Card>
            <CardImg className="season-hike" src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
            </CardBody>
            <CardFooter>
                <h2>{item.season}</h2>
            </CardFooter>
        </Card>
    )
}

function Home(props) {
    return(
        <div className="container-fluid mt-2">
            <h2 className="ml-2">Seasonal Hike</h2>
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md m-1">
                            <RenderCard item={props.easy} />
                        </div>
                        <div className="col-md m-1">
                            <RenderCard item={props.moderate} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md m-1">
                            <RenderCard item={props.hard} />
                        </div>
                        <div className="col-md m-1">
                            <RenderCard item={props.easy} />
                        </div>                        
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="row">
                        <Card className="carousel">
                            <BackPackingTips />
                        </Card>
                    </div>
                    <div className="row">
                        <Card className="carousel">
                            <WanderLust />
                        </Card>
                    </div>
                </div>
            </div>
        </div>  
    );
}

export default Home;

