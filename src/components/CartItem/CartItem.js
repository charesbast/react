/**
 * Created by M08180 on 20/10/2015.
 */
import React, { PropTypes, Component } from 'react';
import styles from './CartItem.css';
import withStyles from '../../decorators/withStyles';


@withStyles(styles)
class CartItem extends Component{

    static defaultProps = {
        cartItem: {
            cover: '',
            title: '',
            price: 0,
            qqt: 1
        }
    };

    static propTypes = {
        cartItem: React.PropTypes.shape({
            cover: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            qqt: PropTypes.number.isRequired
        })
    };

    render(){

    }

}

export default CartItem;