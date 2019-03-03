import React from 'react';
import {useField, useForm} from 'react-forms-hooks';
import TextField from "../Form/Components/TextField";
import Tags from "../Form/Components/Tags";



const testForm = () => {

    const form = useForm();
    const textField = useField(form, 'text');
    const tagsField = useField(form, 'tags', []);

    return (
        <div className="container">
            <form>
                <TextField {...textField}/>
                <Tags {...tagsField}/>

            </form>
        </div>
    )
};

export default testForm;