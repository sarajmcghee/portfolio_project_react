import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function OnlineOrder(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Online Order</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Online Order</h2>
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default OnlineOrder;