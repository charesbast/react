/**
 * Created by M08180 on 20/10/2015.
 */
import React, { PropTypes, Component } from 'react';
import styles from './MyCartItem.css';
import withStyles from '../../decorators/withStyles';
import { ListItem } from 'material-ui';
import BookItem from '../BookItem'

@withStyles(styles)
class MyCartItem extends BookItem{

    //static defaultProps = {
    //    item: {
    //        qqt: 1
    //    }
    //};
    //
    //static propTypes = {
    //
    //};

    render(){

        return (
            <ListItem leftAvatar={this.props.item.cover}>

            </ListItem>
        )
    }
}

export default MyCartItem;