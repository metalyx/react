import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import dateFormat from 'dateformat';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.setState(props);

    }
    

    render () {
        return (this.renderComments(this.state));
    }
  
}

export default Comments;