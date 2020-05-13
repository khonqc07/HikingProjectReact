import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderModerateTrails({moderate}) {
    return (
        <div className = "row">
            <Card className = "col col-md-6 m-1 p-1">                
                <CardImg className="trail-photo" src = {moderate.image} alt = {moderate.name} />
                <CardImgOverlay>
                    <CardTitle> Photo by {moderate.photographer} </CardTitle>
                </CardImgOverlay>                
            </Card>
            <Card className = "col col-md-5 m-1">
                <CardTitle className="mt-2">
                    <h4>{moderate.name}</h4>
                </CardTitle>
                <CardBody>
                    <p>Distance: {moderate.distance}</p>
                    <p>Elevation: {moderate.elevation}</p>
                    <p>Best time to visit: {moderate.season}</p>
                    <p><a href="">Read More</a></p>
                </CardBody>
            </Card>
        </div>
    );
}

function ModerateTrails(props) { 
    const moderateTrails = props.moderate.map(moderate => {
        return (
            <div key = {moderate.id}>
                <RenderModerateTrails moderate = {moderate} />
            </div>
        );
    });

    return (
        <div className = "container">
            <div className = "row">
                <div className = "col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Moderate Trails</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Moderate Trails</h2>
                    <hr />
                </div>
            </div>
            <div className = "row">
                {moderateTrails}
            </div>
        </div>
    );
}

export default ModerateTrails;