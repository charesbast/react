import React, { PropTypes, Component } from 'react';
import styles from './BookItem.css';
import withStyles from '../../decorators/withStyles';
import { RaisedButton, FontIcon } from 'material-ui';

@withStyles(styles)
class BookItem extends Component{

    static defaultProps = {
        cover: '',
        title: '',
        price: 0
    };

    static propTypes = {
        cover: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    };


    render(){

        return(
            <div className="BookItem">
                <div className="BookItem-image-container">
                    <img src={this.props.cover} className="BookItem-image" alt="Aucune image." />
                </div>
                <div className="BookItem-description-container">
                    <h3 className="BookItem-title" title={this.props.title}>{this.props.title}</h3>
                    <p className="BookItem-price">{this.props.price} €</p>
                </div>
                    <RaisedButton className="BookItem-button" label="Ajouter au panier" labelPosition="before" primary={true}>
                        <FontIcon className="BookItem-icon fa fa-cart-plus"/>
                    </RaisedButton>
            </div>
        );
    }
}

export default BookItem;