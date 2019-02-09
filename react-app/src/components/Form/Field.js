import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Field extends Component {

    componentWillMount() {
        const {form, name, defaultValue, validate} = this.props;
        form.setValue(name, defaultValue === undefined ? '' : defaultValue);
        validate && form.setValidator(name, validate);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.onChange) {
            this.props.onChange();
        }
    }

    render() {
        const {form, name, disabled, render, defaultValue} = this.props;
        const props = {
            value: form.fields[name],
            error: form.errors[name],
            onChange: form.onFormChange,
            name: name,
            disabled: disabled,
            defaultValue: defaultValue
        };
        return render(props);
    }
}

Field.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    validate: PropTypes.arrayOf(PropTypes.string)
};

Field.defaultProps = {
    defaultValue: undefined,
    disabled: false
};

export default Field;