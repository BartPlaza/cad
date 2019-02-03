import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {

    const {form, render, name} = props;
    const formProps = {
        onSubmit: form.onSubmit,
        name: name
    };

    return render(formProps);
};

Button.propTypes = {
    render: PropTypes.func.isRequired,
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired
};

export default Button;