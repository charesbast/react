/**
 * Created by M08180 on 15/10/2015.
 */
import React, { PropTypes, Component } from 'react';
import styles from './MyCartButton.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class MyCartButton extends Component{

    static defaultProps = {
        itemsCount: 0
    };

    static propTypes = {
        itemsCount : React.PropTypes.number.isRequired
    };

    render(){
        return (
            <button className="MyCartButton">
                Mon panier
                <i className="fa fa-shopping-cart">{this.props.itemsCount}</i>
            </button>
        );
    }

}

export default MyCartButton;