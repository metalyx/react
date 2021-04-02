import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import dateFormat from 'dateformat';


class Dishdetail extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }


    // renderDish method - render card of exact dish
    renderDish(dish) {
        
        if (this.props.dish != null) {
            return(
                
                <div key={this.props.dish.id} className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    renderComments (comments) {
        if (this.props.dish != null) {
            const allcomments = this.props.dish.comments.map((com) => {
                return (
                    <ul key={com.id} className="list-unstyled">
                        <li>{com.comment}</li>
                        <li>-- {com.author}, {dateFormat(com.date, "mmmm dS, yyyy")}</li>
                    </ul>
                );
            });

            return (
                <div className="col-12 col-md-5 m-1">
                    <h2>Comments</h2>
                    {allcomments}
                </div>
                
            );
        }
        else {
            
            return (
                <div />
            );
        }
    }


    render () {
       return (
           <div className="row">
                {[this.renderDish(this.props), this.renderComments(this.props)]}
           </div>
               
           );
    }
        
    
}

export default Dishdetail;