import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { TRAILS } from '../shared/trailsinfo';
import {Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            trailsinfo: TRAILS
        };
    }

    render() {
        return(
            <div>
                <Header />
                <Footer />
            </div>
        )
    }
}

export default Main;