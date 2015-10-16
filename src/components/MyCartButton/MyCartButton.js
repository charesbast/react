/**
 * Created by M08180 on 15/10/2015.
 */
import React, { PropTypes, Component } from 'react';
import MyCartStore from '../../stores/MyCart';
import styles from './MyCartButton.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class MyCartButton extends Component{

    // get initial state
    state = {
        itemsCount: 0
    };

    onMyCartChange(newList){
        this.setState({
            itemsCount: newList.length
        })
    }

    componentDidMount(){
        this.unsubscribe = MyCartStore.listen(this.onMyCartChange);
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    render(){
        return (
            <button className="MyCartButton">
                Mon panier <i className="fa fa-shopping-cart"></i> {this.state.itemsCount}
            </button>
        );
    }

}

export default MyCartButton;