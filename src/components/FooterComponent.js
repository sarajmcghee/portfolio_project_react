import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                        <li><Link to='/home'className="link">Home</Link></li>
                            <li><Link to='/onlineorder' className="link">Order Online</Link></li>
                            <li><Link to='/reservation' className="link">Reservations</Link></li>
                            <li><Link to='/menu' className="link">Menu</Link></li>
                            <li><Link to='/contactus'className="link">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram link" href="http://instagram.com/" ><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link link" href="tel:+14235551234"><i className="fa fa-phone" /> 1-423-555-1234</a><br />
                        <a role="button" className="btn btn-link link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> mcgheeseatery@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;