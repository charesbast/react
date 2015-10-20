import React, { PropTypes, Component } from 'react';
import styles from './MyCartPage.css';
import withStyles from '../../decorators/withStyles';
import http from '../../core/HttpClient';
import Actions from "../../actions/actions.js";
import MyCartList from "../MyCartList";
import MyCartResume from '../MyCartResume';

@withStyles(styles)
class MyCartPage extends Component{

    state = {
        myCart: [],
        offers: {}
    };

    updateData(){

    }

    componentDidMount(){
        this.updateData();
    }


    render(){
        return(
            <div className="MyCartPage">
                <MyCartList myCart={this.state.myCart}></MyCartList>
                <MyCartResume myCart={this.state.myCart} offers={this.state.offers}></MyCartResume>
            </div>
        )
    }
}

export default MyCartPage;