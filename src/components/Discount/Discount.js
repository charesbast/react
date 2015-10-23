/**
 * Created by M08180 on 23/10/2015.
 */
import React, { PropTypes, Component } from 'react';
import styles from './Discount.css';
import withStyles from '../../decorators/withStyles';


@withStyles(styles)
class Discount extends Component{

    static defaultProps = {
        offer: {
            type: '',
            value: 0,
            calculatedDiscount: 0
        }
    };

    static propTypes = {
        offer : React.PropTypes.shape({
            type: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
            calculatedDiscount: PropTypes.number.isRequired
        })
    };

    getDiscountDescription(){
        let offer = this.props.offer;
        switch(offer.type){
            case 'percentage':
                return 'Remise de '+offer.value+ '%';
                break;
            case 'minus':
                return 'Remise immédiate';
                break;
            case 'slice':
                return "Remise de "+offer.value+ "€ par tranche de "+offer.sliceValue+"€ d'achats";
                break;
            default:
                return '';
                break;
        }
    }

    render(){
        return(
            <div className="Discount">
                <div className="Discount-description">{this.getDiscountDescription()}</div>
                <div className="Discount-value">- {this.props.offer.calculatedDiscount}€</div>
            </div>
        )
    }
}

export default Discount;