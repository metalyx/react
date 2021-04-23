import React, { Component } from 'react';
import { Button, Col, Modal, ModalBody, ModalHeader, Row, Label } from 'reactstrap';
import { LocalForm, Errors, Control } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {

    constructor (props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
        
        this.toggleModal = this.toggleModal.bind(this);
        this.handleComments = this.handleComments.bind(this);
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

    render () {
        return (
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
          
        );
    }
}

export default CommentForm;