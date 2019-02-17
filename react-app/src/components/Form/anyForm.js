import React from "react";
import useForm from './useForm';
import useField from "./useField";
import BulmaTextInput from "./Bulma/BulmaTextInput";
import BulmaSelect from "./Bulma/BulmaSelect";
import useOptionalField from "./useOptionalField";
import SubmitButton from "./SubmitButton";
import validators from './Validators/validators';
import useReduxForm from "./useReduxForm";
import {useRedux} from "../../index";

const anyForm = (props) => {

    const onSubmit = (fields) => {
        alert(JSON.stringify(fields));
    };

    const options = [
        {
            value: "12",
            name: 'it\'s number',
            topics: [
                {value: 23, name: 'coś tam'},
                {value: 13, name: 'krótki'},
                {value: 3, name: 'więcej niż krótki'},
            ]
        },
        {
            value: "22",
            name: 'string',
            topics: [
                {value: 'string aaaa', name: '3333'},
                {value: 'string bb', name: '2222'},
            ]
        },
    ];

    const form = useReduxForm(onSubmit);
    const [user, ] = useRedux('user');

    const nameField = useField(form, 'name', user.form.name, [validators.notEmpty, validators.maxLength(5)]);
    const countryField = useField(form, 'country', user.form.country);

    const currentCountry = options.filter((option) => option.value === countryField.value);
    const topics = currentCountry.length ? currentCountry[0].topics : [];

    const topicField = useField(form, 'topic', user.form.topic);
    const textField = useOptionalField(form, 'text', user.form.text);

    const dynamicFields = [];

    /*options.forEach((option) => {
        const field = useField(form, option.name);
        dynamicFields.push(field);
    });*/

    console.log(form);


    return (
        <form>
            <BulmaTextInput field={nameField}/>
            <BulmaSelect field={countryField} options={options}/>
            <BulmaSelect field={topicField} options={topics}/>
            {nameField.value === 'Bart' && <BulmaTextInput field={textField}/>}

           {/* {dynamicFields.map((field) =>
               <BulmaTextInput key={field.name} field={field}/>
            )}*/}

            <pre>{JSON.stringify(form.fields, null, 2)}</pre>
            <SubmitButton name={'submit'} onSubmit={form.onSubmit}/>
        </form>
    );
};

export default anyForm;