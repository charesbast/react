/**
 * Created by M08180 on 20/10/2015.
 */
import React, { PropTypes, Component } from 'react';
import styles from './MyCartList.css';
import withStyles from '../../decorators/withStyles';
import { List } from 'material-ui';

@withStyles(styles)
class MyCartList extends Component{

    static defaultProps = {
        myCart : []
    };

    static propTypes = {
        myCart : React.PropTypes.array.isRequired
    };


    render(){
        var myCartItems = this.props.myCart.map((cartItem, index) => {
            return (
                <MyCartItem key={index} item={cartItem}></MyCartItem>
            )
        });

        return (
            <List subheader="Mon panier">
                {myCartItems}
            </List>
        )

    }
}

export default MyCartList;