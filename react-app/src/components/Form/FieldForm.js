import React from 'react';
import PropTypes from 'prop-types';
import useField from "./useField";

const FieldForm = (props) => {

    const {form, name, defaultValue} = props;
    const field = useField(form, name, defaultValue);

    return this.props.render(field);
};

FieldForm.propTypes = {
    form: PropTypes.object.isRequired,
    render: PropTypes.func.isRequired
};

export default FieldForm;