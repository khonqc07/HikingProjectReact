import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderEasyTrails({easy}) {
    return (
        <div className = "row">
            <Card className = "col col-md-6 m-1 p-1">                 
                <CardImg className="trail-photo" src = {easy.image} alt = {easy.name} />
                <CardImgOverlay>
                    <CardTitle> Photo by {easy.photographer} </CardTitle>
                </CardImgOverlay>                
            </Card>
            <Card className = "col col-md-5 m-1">
                <CardTitle className="mt-2">
                    <h4>{easy.name}</h4>
                </CardTitle>
                <CardBody>
                    <p>Distance: {easy.distance}</p>
                    <p>Elevation: {easy.elevation}</p>
                    <p>Best time to visit: {easy.season}</p>
                    <p><a href="">Read More</a></p>
                </CardBody>
            </Card>
        </div>
    );
}

function EasyTrails(props) { 
    const easyTrails = props.easy.map(easy => {
        return (
            <div key = {easy.id}>
                <RenderEasyTrails easy = {easy} />
            </div>
        );
    });

    return (
        <div className = "container">
            <div className = "row">
                <div className = "col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Easy Trails</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Easy Trails</h2>
                    <hr />
                </div>
            </div>
            <div className = "row">
                {easyTrails}
            </div>
        </div>
    );
}

export default EasyTrails;