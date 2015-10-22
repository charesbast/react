import React, { PropTypes, Component } from 'react';
import Reflux from 'reflux';
import http from '../../core/HttpClient';
import Actions from "../../actions/actions.js";
import MyCartList from "../MyCartList";
import MyCartResume from '../MyCartResume';
import MyCartStore from '../../stores/MyCart/MyCart.store.js';
import CommercialOffers from '../../stores/CommercialOffers/CommercialOffers.store.js';

var MyCartPage = React.createClass({

    mixins: [Reflux.connect(MyCartStore, "myCart"), Reflux.connect(CommercialOffers, "offers")],

    getInitialState: function(){
        return {
            myCart: MyCartStore.list,
            offers: {}
        }
    },

    render: function(){
        let style = {
            "margin": "0 20%",
            "padding-bottom": "60px"
        };
        return(
            <div className="MyCartPage" style={style}>
                <MyCartList myCart={this.state.myCart}></MyCartList>
                <MyCartResume myCart={this.state.myCart} offers={this.state.offers}></MyCartResume>
            </div>
        )
    }
});

export default MyCartPage;