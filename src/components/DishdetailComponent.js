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
        
        if (this.props.selected != null) {
            // for (var a in this.props.selected.selectedDish) {
            //     console.log(this.props.selected.selectedDish.id)
            // }
            return(
                
                <div key={this.props.selected.selectedDish.id} className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={this.props.selected.selectedDish.image} alt={this.props.selected.selectedDish.name} />
                        <CardBody>
                            <CardTitle>{this.props.selected.selectedDish.name}</CardTitle>
                            <CardText>{this.props.selected.selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                
            );
        }
        else {
            console.log("props == null")
            return(
                <div></div>
            );
        }
    }

    renderComments (comments) {
        if (this.props.selected != null) {
            const allcomments = this.props.selected.selectedDish.comments.map((com) => {
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
            console.log("props == null")
            return (
                <div />
            );
        }
    }


    render () {
       return (
                [this.renderDish(this.props), this.renderComments(this.props)]
           );
    }
        
    
}

export default Dishdetail;