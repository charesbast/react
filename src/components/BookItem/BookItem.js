import React, { PropTypes, Component } from 'react';
import styles from './BookItem.css';
import withStyles from '../../decorators/withStyles';
import { RaisedButton, FontIcon } from 'material-ui';
import Actions from "../../actions/actions.js";

@withStyles(styles)
class BookItem extends Component{

    static defaultProps = {
        book: {
            cover: '',
            title: '',
            price: 0
        }
    };

    static propTypes = {
        book: React.PropTypes.shape({
            cover: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
        })
    };

    handleClick(){
        Actions.addItem(this.props.book);
    }

    render(){

        return(
            <div className="BookItem">
                <div className="BookItem-image-container">
                    <img src={this.props.book.cover} className="BookItem-image" alt="Aucune image." />
                </div>
                <div className="BookItem-description-container">
                    <h3 className="BookItem-title" title={this.props.book.title}>{this.props.book.title}</h3>
                    <p className="BookItem-price">{this.props.book.price} €</p>
                </div>
                <RaisedButton className="BookItem-button" label="Ajouter au panier" primary={true} onClick={this.handleClick.bind(this)}>
                    <FontIcon className="BookItem-icon fa fa-cart-plus"/>
                </RaisedButton>
            </div>
        );
    }
}

export default BookItem;