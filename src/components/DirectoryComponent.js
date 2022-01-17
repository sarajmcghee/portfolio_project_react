import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMenuitem: null
        };
    }

    onMenuitemSelect(menuitem) {
        this.setState({selectedMenuitem: menuitem});
    }

    renderSelectedMenuitem(menuitem) {
        if (menuitem) {
            return (
                <Card>
                    <CardImg top src={menuitem.image} alt={menuitem.name} />
                    <CardBody>
                        <CardTitle>{menuitem.name}</CardTitle>
                        <CardText>{menuitem.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    }

    render() {
        const directory = this.props.menuitems.map(menuitem => {
            return (
                <div key={menuitem.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onMenuitemSelect(menuitem)}>
                        <CardImg width="100%" src={menuitem.image} alt={menuitem.name} />
                        <CardImgOverlay>
                            <CardTitle>{menuitem.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedMenuitem(this.state.selectedMenuitem)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Directory;