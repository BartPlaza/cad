import React from 'react';
import PropTypes from 'prop-types';
import Form from "./Form";
import Field from "./Field";
import BulmaTextInput from "./Bulma/BulmaTextInput";
import BulmaSelect from "./Bulma/BulmaSelect";
import BulmaCheckbox from "./Bulma/BulmaCheckbox";
import Button from "./Button";
import SubmitButton from "./SubmitButton";

const ExampleForm = props => {

    const options = [{value: 12, name: 'test 1'}, {value: 23, name: 'testyy'}];

    const onSubmit = () => {
        alert('submit');
    };

    return (
        <div>
            <Form onSubmit={onSubmit} render={(form) =>
                <div>
                    <Field
                        form={form}
                        name="test"
                        render={(props) => <BulmaTextInput {...props}/>}
                        validate={['required']}
                    />
                    <Field
                        form={form}
                        name="select"
                        render={(props) => <BulmaSelect {...props} options={options}/>}
                    />
                    <Field
                        form={form}
                        name="checkbox"
                        render={(props) => <BulmaCheckbox {...props}/>}
                    />
                    <Button
                        form={form}
                        name="submit"
                        render={(props) => <SubmitButton {...props}/>}
                    />
                </div>
            }/>
        </div>
    );
};

export default ExampleForm;