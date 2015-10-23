/**
 * Created by M08180 on 23/10/2015.
 */
import React, { PropTypes, Component } from 'react';
import styles from './ContactForm.css';
import withStyles from '../../decorators/withStyles';
import { Card, CardHeader, CardTitle, CardActions, CardText, FlatButton } from 'material-ui';

@withStyles(styles)
class ContactForm extends Component{

    static propTypes = {
        title: React.PropTypes.string,
        subtitle: React.PropTypes.string
    };

    handleCancel(){

    }

    handleSubmit(form){

    }

    render(){
        let cardTitle;
        if(this.props.title || this.props.subtitle){
            cardTitle = <CardTitle title={this.props.title} subtitle={this.props.subtitle}/>;
        }

        return(
            <div className="ContactForm">
                <Card>
                    {cardTitle}
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>

                    <CardActions className="ContactForm-actions">
                        <FlatButton label="Annuler" onClick={this.handleCancel.bind(this)}/>
                        <FlatButton label="Confirmer" onClick={this.handleSubmit.bind(this)}/>
                    </CardActions>

                </Card>
            </div>
        )
    }
}

export default ContactForm;


