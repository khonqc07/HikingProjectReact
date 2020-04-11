import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { EASY } from '../shared/easyTrails';
import { MODERATE } from '../shared/moderateTrails';
import { HARD } from '../shared/hardTrails';
import {Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            easy: EASY,
            moderate: MODERATE,
            hard: HARD
        };
    }

    render() {
        const HomePage = () => {
            return(
                <Home 
                    easy={this.state.easy.filter(easy => easy.featured)[0]}
                    moderate={this.state.moderate.filter(moderate => moderate.featured)[0]}
                    hard={this.state.hard.filter(hard => hard.featured)[0]}
                    easy={this.state.easy.filter(easy => easy.featured)[0]}
                />
            );
        }

        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;