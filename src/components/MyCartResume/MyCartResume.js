/**
 * Created by M08180 on 20/10/2015.
 */
import React, { PropTypes, Component } from 'react';
import styles from './MyCartResume.css';
import withStyles from '../../decorators/withStyles';
import CommercialOffers from '../../stores/CommercialOffers';
import _ from 'lodash';

@withStyles(styles)
class MyCartResume extends Component{

    static defaultProps = {
        myCart: [],
        offers: []
    };

    static propTypes = {
        myCart: React.PropTypes.array.isRequired,
        offers: React.PropTypes.array.isRequired
    };

    getFullPrice(){
        var total = 0;
        _.forEach(this.props.myCart, function(item){
            total+= item.price*item.qqt;
        });
        return total;
    }

    getBestOffer() {
        let offers = this.props.offers.slice(0);
        if (offers && offers.length > 0) {
            var fullPrice = this.getFullPrice();

            _.forEach(offers, function (offer) {
                if (offer.type === 'percentage') {
                    offer.calculatedDiscount = fullPrice * (offer.value / 100);
                } else if (offer.type === 'minus') {
                    offer.calculatedDiscount = offer.value;
                } else if (offer.type === 'slice') {
                    offer.calculatedDiscount = Math.floor(fullPrice / offer.sliceValue) * offer.value;
                }
            });
            return _.max(offers, 'calculatedDiscount');
        }else{
            return {calculatedDiscount: 0};
        }
    }

    render(){
        var bestOffer = this.getBestOffer(),
            fullPrice = this.getFullPrice();

        return (
            <div className="MyCartResume">
                <h1>Paiement</h1>
                <h3>Prix total: {fullPrice}€</h3>
                <h4>Remise: {bestOffer.calculatedDiscount}€</h4>
                <h3>Prix final: {fullPrice - bestOffer.calculatedDiscount}€</h3>
            </div>
        )
    }
}

export default MyCartResume;