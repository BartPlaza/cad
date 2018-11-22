import React from 'react';
import PropTypes from 'prop-types';

const withFormLogic = (Component, fields) => {
    class FormLogic extends React.Component {
        state = {
            fields: fields,
            errors: {},
            isSending: false
        };

        sendAction = (event) => {
            event.preventDefault();
            this.setState({
                isSending: true
            });
            console.log(JSON.stringify(this.state.fields));
            setTimeout(() => {
               this.setState({
                   isSending: false
               })
            },4000);
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
                    sendAction={this.sendAction}
                    updateAction={this.updateAction}
                    resetAction={this.resetAction}
                    errors={this.state.errors}
                    isSending={this.state.isSending}
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
