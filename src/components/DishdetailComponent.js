import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';

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
            console.log(comments)
            const allcoments = comments.map((a) => {
               
                    return (
                        <ul key={a.id} className="list-unstyled">
                        <li>{a.comment}</li>
                        <li>-- {a.author}, {dateFormat(a.date, "mmmm dS, yyyy")}</li>
                    </ul>
                    );
                
                
                
               
            })
            return (
                <div className="col-12 col-md-5 m-1">
                    <h2>Comments</h2>
                    {allcoments}
                    <CommentForm/>
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
            console.log(props);
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                     <RenderDish dish={props.dish}/>
                     
                     <RenderComments comments={props.comments}/>
                     
                </div>
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