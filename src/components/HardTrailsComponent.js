import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderHardTrails({hard}) {
    return (
        <div className = "row">
            <Card className = "col col-md-6 m-1 p-1">                
                <CardImg className="trail-photo mt-2" src = {hard.image} alt = {hard.name} />
                <CardImgOverlay>
                    <CardTitle> Photo by {hard.photographer} </CardTitle>
                </CardImgOverlay>                
            </Card>
            <Card className = "col col-md-5 m-1">
                <CardTitle className="mt-2">
                    <h4>{hard.name}</h4>
                </CardTitle>
                <CardBody>
                    <p>Distance: {hard.distance}</p>
                    <p>Elevation: {hard.elevation}</p>
                    <p>Best time to visit: {hard.season}</p>
                    <p><a href="">Read More</a></p>
                </CardBody>
            </Card>
        </div>
    );
}

function HardTrails(props) { 
    const hardTrails = props.hard.map(hard => {
        return (
            <div key = {hard.id}>
                <RenderHardTrails hard = {hard} />
            </div>
        );
    });

    return (
        <div className = "container">
            <div className = "row">
                <div className = "col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Hard Trails</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Hard Trails</h2>
                    <hr />
                </div>
            </div>
            <div className = "row">
                {hardTrails}
            </div>
        </div>
    );
}

export default HardTrails;