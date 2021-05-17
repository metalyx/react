import React, { Component } from 'react';
import Home from './HomeComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import About from './AboutComponent';
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../redux/ActionCreators';


const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        leaders: state.leaders,
        promotions: state.promotions
    }
}

const mapDispatchToProps = dispatch => ({
    addComment: (dishId, raiting, author, comment) => dispatch(addComment(dishId, raiting, author, comment)),
    fetchDishes: () => {dispatch(fetchDishes())}
})


class Main extends Component {

    constructor(props) {
        super(props);
        
     
    }

    componentDidMount() {
        this.props.fetchDishes();
    }

    render() {
        
        const HomePage = () => {
            return (
                <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                      dishesLoading={this.props.dishes.dishesLoading}
                      dishesErrMess={this.props.dishes.errMess}
                      promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
                      leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({match}) => {
           
            return (
                <Dishdetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    dishesLoading={this.props.dishes.dishesLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    comments={this.props.comments.filter((comment) => comment.dishId  === parseInt(match.params.dishId, 10))}
                    addComment={this.props.addComment}
                    dishId={this.props.dishId}
                />
                
            );
        }

        return (
            <div>
                <Header />
                <div className="container">
                   
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                        <Route path="/menu/:dishId" component={DishWithId} />
                        <Route exact path="/contactus" component={Contact} />
                        <Route path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
                        <Redirect to="/home" />
                        
                    </Switch>
                </div>
                <Footer />
                
            </div>
        );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
