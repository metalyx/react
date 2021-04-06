import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import dateFormat from 'dateformat';

    function RenderDish({dish}) {
        
        if (dish != null) {
            return(
                
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
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

    function RenderComments ({comments}) {
        if (comments != null) {
            const allcomments = comments.comments.map((com) => {
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


    const Dishdetail = (props) => {
        if (props != null) {
            return (
                <div className="row">
                     {<RenderDish dish={props.dish}/>}
                     {<RenderComments comments={props.dish}/>}
                </div>
                    
                );
        }
        else {
            return (
                <div></div>
            );
        }
      
    }
        
    


export default Dishdetail;