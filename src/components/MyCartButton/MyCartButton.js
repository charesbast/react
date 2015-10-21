/**
 * Created by M08180 on 15/10/2015.
 */
import React, { PropTypes, Component } from 'react';
import MyCartStore from '../../stores/MyCart';
import styles from './MyCartButton.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class MyCartButton extends Component{

    // get initial state
    state = {
        itemsCount: MyCartStore.list.length
    };

    onMyCartChange(newList){
        this.setState({
            itemsCount: newList.length
        })
    }

    componentDidMount(){
        this.unsubscribe = MyCartStore.listen( (newList) => {
            this.onMyCartChange(newList)
        });
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    render(){
        return (
            <button className="MyCartButton">
                <a href="/cart">
                Mon panier <i className="fa fa-shopping-cart"></i> {this.state.itemsCount}
                </a>
            </button>
        );
    }

}

export default MyCartButton;