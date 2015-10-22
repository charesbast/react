/**
 * Created by M08180 on 15/10/2015.
 */
import React, { PropTypes, Component } from 'react';
import MyCartStore from '../../stores/MyCart';
import styles from './MyCartButton.css';
import withStyles from '../../decorators/withStyles';
import _ from 'lodash';
import Link from '../Link';

@withStyles(styles)
class MyCartButton extends Component{

    // get initial state
    state = {
        itemsCount: this.getTotalItems(MyCartStore.list) || 0
    };

    getTotalItems(list){
        let res = _.reduce(_.pluck(list, 'qqt'), function (total, qqt) {
            return total + qqt;
        });
        return res;
    }

    onMyCartChange(newList){
        this.setState({
            itemsCount: this.getTotalItems(newList)
        })
    }

    componentDidMount(){
        this.unsubscribe = MyCartStore.listen( (newList) => {
            this.onMyCartChange(newList)
        });
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    render(){
        return (
            <button className="MyCartButton">
                <a href="/cart">
                    Mon panier <i className="fa fa-shopping-cart"></i> {this.state.itemsCount}
                </a>
            </button>
        );
    }

}

export default MyCartButton;