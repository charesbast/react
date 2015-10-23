/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './ShopPage.css';
import withStyles from '../../decorators/withStyles';
import BooksList from '../BooksList';
import http from '../../core/HttpClient';

@withStyles(styles)
class ShopPage extends Component {

    static propTypes = {
        path: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        title: PropTypes.string
    };

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired
    };

    state = {
        books : []
    };

    loadBooksFromServer(){
        http.get('http://henri-potier.xebia.fr/books')
            .then(data => {
                this.setState({
                    books: data
                });
            })
            .catch(error => {console.error(error)});
    }

    componentDidMount(){
        this.loadBooksFromServer();
    }

    render() {
        this.context.onSetTitle(this.props.title);
        return (
            <div className="ShopPage">
                {this.props.path === '/' ? null : <h1>{this.props.title}</h1>}
                <BooksList title="Série Hari Potier" books={this.state.books}></BooksList>
            </div>
        );
    }

}

export default ShopPage;
