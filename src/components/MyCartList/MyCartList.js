/**
 * Created by M08180 on 20/10/2015.
 */
import React, { PropTypes, Component } from 'react';
import styles from './MyCartList.css';
import withStyles from '../../decorators/withStyles';
import { List } from 'material-ui';
import MyCartItem from '../MyCartItem';
import MyCartStore from '../../stores/MyCart/MyCart.store.js';


@withStyles(styles)
class MyCartList extends Component{

    static defaultProps = {
        myCart : []
    };

    static propTypes = {
        myCart : React.PropTypes.array.isRequired
    };


    render(){
        let myCartItems = this.props.myCart.map((cartItem, index) => {
            return (
                <MyCartItem key={index} item={cartItem}></MyCartItem>
            )
        });

        return (
            <List className="MyCartList">
                <h1 className="MyCartList-subHeader"><i className="fa fa-shopping-cart"></i> Mon panier</h1>
                {myCartItems}
            </List>
        )

    }
}

export default MyCartList;