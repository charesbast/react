/**
 * Created by M08180 on 20/10/2015.
 */
import React, { PropTypes, Component } from 'react';
import styles from './MyCartResume.css';
import withStyles from '../../decorators/withStyles';
import MyCartStore from '../../stores/MyCart/MyCart.store.js';
import CommercialOffers from '../../stores/CommercialOffers/CommercialOffers.store.js';

@withStyles(styles)
class MyCartResume extends Component{

    state = {
        myCart: MyCartStore.list,
        offers: {}
    };

    onMyCartChange(newList){
        this.setState({
            myChart: newList
        });
    }

    onOffersChange(offers){
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
        return (
            <div className="MyCartResume"></div>
        )
    }
}

export default MyCartResume;