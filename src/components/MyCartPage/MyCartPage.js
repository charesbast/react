import React, { PropTypes, Component } from 'react';
import styles from './MyCartPage.css';
import withStyles from '../../decorators/withStyles';
import http from '../../core/HttpClient';
import Actions from "../../actions/actions.js";
import MyCartList from "../MyCartList";
import MyCartResume from '../MyCartResume';

import MyCartStore from '../../stores/MyCart/MyCart.store.js';
import CommercialOffers from '../../stores/CommercialOffers/CommercialOffers.store.js';


@withStyles(styles)
class MyCartPage extends Component{

    state = {
        myCart: MyCartStore.list,
        offers: {}
    };

    onMyCartChange(newList){
        console.log("onMyCartChange", newList);
        this.setState({
            myChart: newList
        });
    }

    onOffersChange(offers){
        console.log("onOffersChange", offers);
        this.setState({
            offers: offers
        });
    }

    componentDidMount(){
        this.unsubscribeOffers = CommercialOffers.listen( (newOffers) => { this.onOffersChange(newOffers);} );
        this.unsubscribeMyChart = MyCartStore.listen( (newList) => { this.onMyCartChange(newList);} );
    }

    componentWillUnmount(){
        this.unsubscribeMyChart();
        this.unsubscribeOffers();
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