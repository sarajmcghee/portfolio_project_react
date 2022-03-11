import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Reservation(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Reservations</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Reservations</h2>
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default Reservation;