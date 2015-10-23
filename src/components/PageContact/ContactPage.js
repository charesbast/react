/**
 * Created by M08180 on 23/10/2015.
 */
import React, { PropTypes, Component } from 'react';
import styles from './ContactPage.css';
import withStyles from '../../decorators/withStyles';
import ContactForm from '../ContactForm';

@withStyles(styles)
class ContactPage extends Component{


    render(){
        return(
            <div className="ContactPage">
                <ContactForm title="Contact" />
            </div>
        )
    }

}

export default ContactPage;