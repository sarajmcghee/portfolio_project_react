import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Contact(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Contact Us</h2>
                    <hr />
                </div>
            </div>

            <div className="row row-content align-items-center">
                <div className="col-sm-4">
                    <h5>Our Address</h5>
                    <address>
                        1234 Broad St<br />
                        Chattanooga, TN 37341<br />
                        U.S.A.
                    </address>
                </div>
                <div className="col">
                    <a role="button" className="btn btn-link" href="tel:+14235551234"><i className="fa fa-phone" /> 1-423-555-1234</a><br />
                    <a role="button" className="btn btn-link" href="mailto:mcgheeseatery@gmail.com"><i className="fa fa-envelope-o" /> mcgheeseatery@gmail.com</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;