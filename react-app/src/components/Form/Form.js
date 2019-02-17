import React, {useState} from 'react';
import PropTypes from 'prop-types';
import validators from './Validators/validators';
import './Form.scss';

class Form extends React.Component {
    state = {
        fields: {},
        validators: {},
        errors: {},
        isSending: false
    };

    setValue = (key, value) => {
        this.deepSetState('fields', key, value);
    };

    setValidator = (key, validators) => {
        this.deepSetState('validators', key, validators);
    };

    setError = (key, error) => {
        this.deepSetState('errors', key, error);
    };

    onChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setValue(target.name, value);
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.clearErrors();
        const isValid = Object.keys(this.state.validators).length === 0 || this.isValid();
        if (isValid) {
            this.setState({
                isSending: true
            });
            this.props.onSubmit();
        }
    };

    isValid = () => {
        const {fields, validators} = this.state;
        let isValid = true;

        Object.keys(validators).forEach((key) => {
            const rules = validators[key];
            rules.forEach((rule) => {
                if (!(this.isFieldValid(fields[key], rule))) {
                    isValid = false;
                    this.setError(key, rule);
                }
            });
        });
        return isValid;
    };

    isFieldValid = (value, rule) => {
        if (validators.hasOwnProperty(rule)) {
            const validator = validators[rule];
            return validator(value);
        }
        return true;
    };

    clearErrors = () => {
        this.setState({
            errors: {}
        });
    };

    deepSetState = (state, key, value) => {
        this.setState((prevState) => ({
            [state]: {
                ...prevState[state],
                [key]: value
            }
        }));
    };

    render() {
        const form = {
            fields: this.state.fields,
            errors: this.state.errors,
            setValue: this.setValue,
            setValidator: this.setValidator,
            onFormChange: this.onChange,
            onSubmit: this.onSubmit,
        };
        return (
            <form style={{position: 'relative'}}>
                {this.state.isSending && <div className="th-form__loader"/>}
                {this.props.render(form)}
            </form>
        );
    }
}

Form.propTypes = {
    render: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default Form;