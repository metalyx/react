import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';
import { Button, Col, Modal, ModalBody, ModalHeader, Row, Label } from 'reactstrap';
import { LocalForm, Errors, Control } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class Dishdetail extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isModalOpen: false,
            dish: props.dish,
            comments: props.comments,
            props: props
        }
        this.toggleModal = this.toggleModal.bind(this);
    }


    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleComments(values) {
        
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
        this.toggleModal();
    }

    RenderDish(dish) {
        
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

   

    RenderComments (comments) {
        if (comments != null) {
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
                    <div className="row">
                        <div className="col-12">
                            <Button  onClick={this.toggleModal} className="btn btn-secondary">
                                <span className="fa fa-pencil fa-lg"> Submit Comment </span>
                            </Button>
                        </div>
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}>Comment</ModalHeader>
                            <ModalBody>
                                <LocalForm onSubmit={(values) => this.handleComments(values)} className="col-12">
                                    <Row className="form-group">
                                        <Label htmlFor="raiting" md={2}>Raiting</Label>
                                        <Col md={10}>
                                            <Control.select model=".raiting" id="raiting" name="raiting" className="form-control"
                                            validators={{
                                                required
                                            }}>
                                                <option>---</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Control.select>
                                            <Errors
                                                className="text-danger"
                                                model=".raiting"
                                                show="touched"
                                                messages={{
                                                    required: "You must select one"
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="name" md={2}>Your Name</Label>
                                        <Col md={10}>
                                            <Control.text model=".name" id="name" name="name" className="form-control"
                                            validators={{
                                                    minLength: minLength(3), maxLength: maxLength(15)
                                            }} />

                                            <Errors
                                                className="text-danger"
                                                model=".name"
                                                show="touched"
                                                messages={{
                                                    minLength: 'Must be greater than 2 characters',
                                                    maxLength: 'Must be 15 characters or less'
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="comment" md={2}>Comment</Label>
                                        <Col md={10}>
                                            <Control.textarea model=".comment" id="comment" name="comment"  className="form-control">
                                                
                                            </Control.textarea>
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Col md={{size:10, offset:2}}>
                                            <Button type="submit" color="primary">
                                                Send Comment
                                            </Button>
                                        </Col>
                                    </Row>
                                </LocalForm>
                            </ModalBody>
                        </Modal>
                    </div>
          
                </div>
                
            );
        }
        else {
            
            return (
                <div />
            );
        }
    }



     dd = (props) => {
        if (props != null) {
            
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
                     
                     {this.RenderDish(this.state.dish)}
                     {this.RenderComments(this.state.comments)}
                     {/* <RenderComments comments={props.comments}/> */}
                     
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
    render () {
        return (
            this.dd(this.state.props)
        );
    }
    
}

export default Dishdetail;