import React from 'react';
import PropTypes from 'prop-types';

const withFormLogic = (Component, fields) => {
    class FormLogic extends React.Component {
        state = {
            fields: fields,
            errors: {}
        };

        updateAction = (name, value) => {
            const fields = {...this.state.fields, [name]: value};
            this.setState({fields});
        };

        resetAction = (event) => {
            event.preventDefault();
            this.setState((prevState) => {
                const fields = prevState.fields;
                Object.keys(fields).forEach((key) => {
                    fields[key] = '';
                });
                return {
                    fields: fields,
                    errors: {}
                };
            });
        };

        render() {
            return (
                <Component
                    {...this.props}
                    fields={this.state.fields}
                    updateAction={this.updateAction}
                    resetAction={this.resetAction}
                    errors={this.state.errors}
                />
            )
        }
    }

    return FormLogic;
};

withFormLogic.propTypes = {
    fields: PropTypes.array.isRequired,
    Component: PropTypes.element.isRequired
};

export default withFormLogic;
