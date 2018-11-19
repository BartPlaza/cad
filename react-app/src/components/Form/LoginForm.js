import React from 'react';
import PropTypes from 'prop-types';
import FormWrapper from "./FormWrapper";
import TextField from "./TextField";
import FormButton from "./FormButton";
import withFormLogic from "./WithFormLogic";

class LoginForm extends React.Component
{
    static propTypes = {
        fields: PropTypes.object.isRequired,
        errors: PropTypes.object.isRequired,
        sendAction: PropTypes.func.isRequired,
        updateAction: PropTypes.func.isRequired,
        resetAction: PropTypes.func.isRequired
    };

    static fields = {
        name: '',
        surname: ''
    };

    render() {
        const {fields, errors, sendAction, updateAction, resetAction} = this.props;

        return (
            <FormWrapper title="Login form" subtitle="Please fill the form to login">
                <TextField label="name" placeholder="enter name..." value={fields.name} updateAction={updateAction}
                           error={errors.name}/>
                <TextField label="surname" placeholder="enter surname..." value={fields.surname}
                           updateAction={updateAction}/>
                <div className="field is-grouped">
                    <FormButton name="Submit" action={sendAction}/>
                    <FormButton name="Reset" action={resetAction} format="is-default"/>
                </div>
            </FormWrapper>
        )
    }
}

export default withFormLogic(LoginForm, LoginForm.fields);