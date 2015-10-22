/**
 * Created by M08180 on 20/10/2015.
 */
import React, { PropTypes, Component } from 'react';
import styles from './MyCartList.css';
import withStyles from '../../decorators/withStyles';
import { List } from 'material-ui';
import MyCartItem from '../MyCartItem';

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

        let subHeader = (
          <h1><i className="fa fa-shopping-cart"></i> Mon panier</h1>
        );

        return (
            <List subheader={subHeader} className="MyCartList">
                {myCartItems}
            </List>
        )

    }
}

export default MyCartList;