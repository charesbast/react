/**
 * Created by M08180 on 16/10/2015.
 */
import React, { PropTypes, Component } from 'react';
import MyCartStore from '../../stores/MyCart';
import styles from './BooksList.css';
import withStyles from '../../decorators/withStyles';
import BookItem from '../BookItem';

@withStyles(styles)
class BooksList extends Component{

    static defaultProps = {
        title: '',
        books: []
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired
    };

    render() {
        var bookNodes = this.props.books.map((book, id) => {
            return (
                <BookItem key={id} book={book}></BookItem>
            );
        });
        
        return (
            <div className="BooksList">
                <h1 className="BooksList-title">{this.props.title}</h1>
                {bookNodes}
            </div>
        );
    }

}

export default BooksList;