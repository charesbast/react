/**
 * Created by M08180 on 20/10/2015.
 */
import React, { PropTypes, Component } from 'react';
import styles from './MyCartItem.css';
import withStyles from '../../decorators/withStyles';
import { ListItem, Avatar, IconButton } from 'material-ui';
import BookItem from '../BookItem';
import Actions from '../../actions/actions.js';


@withStyles(styles)
class MyCartItem extends BookItem{

    handleAddQuantity(){
        Actions.addOneQuantity(this.props.item);
    }
    handleRemoveOneQuantity(){
        Actions.removeOneQuantity(this.props.item);
    }
    handleRemoveItem(){
        Actions.removeItem(this.props.item);
    }

    render(){

        let avatar = (<Avatar src={this.props.item.cover}/>);
        let secondaryText = (
            <p>
                {this.props.item.price+"€"}<br/>
                <button className="MyCartItem-button" onClick={this.handleRemoveOneQuantity.bind(this)}>-</button>
                {this.props.item.qqt}
                <button className="MyCartItem-button" onClick={this.handleAddQuantity.bind(this)}>+</button>
            </p>
        );
        let removeButton = (<IconButton iconClassName="fa fa-trash" tooltip="Supprimer" onClick={this.handleRemoveItem.bind(this)}/>);

        return (
            <div className="MyCartItem">
                <ListItem disabled={true}
                          leftAvatar={avatar}
                          primaryText={this.props.item.title}
                          secondaryTextLines={2}
                          secondaryText={secondaryText}
                          rightIconButton={removeButton}>
                </ListItem>
            </div>
        )
    }
}

export default MyCartItem;