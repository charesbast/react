/**
 * Created by M08180 on 23/10/2015.
 */
import React, { PropTypes, Component } from 'react';
import styles from './ContactForm.css';
import withStyles from '../../decorators/withStyles';
import { CardActions, FlatButton, TextField } from 'material-ui';

@withStyles(styles)
class ContactForm extends Component{

    handleSubmit(event){
        event.preventDefault();
    }

    handleInputChange(field, event){
        let modifiedState = {};
        modifiedState[field] = event.target.value;

        // Handling required attribute
        modifiedState[field+'ErrorText'] = (event.target.attributes.hasOwnProperty('required') && event.target.value.length === 0) ? 'Champ requis' : '';
        this.setState(modifiedState);
    }

    state = {
        firstName: '',
        lastName: '',
        firstNameErrorText: '',
        lastNameErrorText: ''
    };


    render(){

        return(
            <div className="ContactForm">
                <form name="contactForm" onSubmit={this.handleSubmit.bind(this)}>

                    <TextField className="ContactForm-input"
                               floatingLabelText="Prénom"
                               value={this.state.firstName}
                               onChange={this.handleInputChange.bind(this, 'firstName')}
                               errorText={this.state.firstNameErrorText}
                               required>
                    </TextField>

                    <TextField
                        className="ContactForm-input"
                        floatingLabelText="Nom"
                        value={this.state.lastName}
                        onChange={this.handleInputChange.bind(this, 'lastName')}
                        errorText={this.state.lastNameErrorText}
                        required>
                    </TextField>

                    <textarea className="ContactForm-input" name="msg" id="msg" cols="30" rows="10"></textarea>

                    <CardActions className="ContactForm-actions">
                        <FlatButton type="submit" label="Envoyer"/>
                    </CardActions>
                </form>
            </div>
        )
    }
}

export default ContactForm;


