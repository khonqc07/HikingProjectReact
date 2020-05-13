import React, { Component } from 'react';
import {Link} from 'react-router-dom';

function handleSubmit(event) {
    alert("Thank you for subscribing!");
    event.preventDefault();
}

function Footer(){
    
    return(
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col col-sm-4">
                        <h5>Contact Us</h5>
                        <p>2205 152nd Ave NE <br /> Redmond, WA 98052</p>
                        <a role="button"><i class="fa fa-phone fa-lg"></i> 1-800-666-300</a><br />
                        <a role="button"><i class="fa fa-envelope-o fa-lg"></i> Random@washingtonhike.org</a><br />
                        <div className="mt-3">
                            <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i class="fa fa-instagram" /></a>{' '}
                            <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i class="fa fa-facebook" /></a>{' '}
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter" /></a>{' '}
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i class="fa fa-youtube"/></a>{' '}
                        </div>                    
                    </div>
                    <div className="col col-sm-6 ml-auto">
                        <h5>Email Subscription</h5>
                        <p>Subscribe to our free email newsletter for hiking events, news, gear reviews and more.</p>
                        <form onSubmit={handleSubmit} >
                            <div className="form-row">
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>
                            <div className="form-row mt-3">
                                <button type="submit" className="btn btn-danger">Sign me up</button>
                            </div> 
                        </form>                                       
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;