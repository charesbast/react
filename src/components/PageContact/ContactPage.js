/**
 * Created by M08180 on 23/10/2015.
 */
import React, { PropTypes, Component } from 'react';
import styles from './ContactPage.css';
import withStyles from '../../decorators/withStyles';
import ContactForm from '../ContactForm';
import { Card, CardTitle } from 'material-ui';

@withStyles(styles)
class ContactPage extends Component{


    render(){
        return(
            <div className="ContactPage">
                <Card className="ContactPage-formCard">
                    <CardTitle title='Contact'/>
                    <ContactForm />
                </Card>
            </div>
        )
    }

}

export default ContactPage;