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
        books: []
    };

    static propTypes = {
        books: PropTypes.array.isRequired
    };

    render() {
        var bookNodes = this.props.books.map((book) => {
            return (
                <BookItem key={book.isbn} cover={book.cover} title={book.title} price={book.price}></BookItem>
            );
        });
        
        return (
            <div className="BooksList">
                {bookNodes}
            </div>
        );
    }

}

export default BooksList;